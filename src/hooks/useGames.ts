import {useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {Simulate} from "react-dom/test-utils";
import cancel = Simulate.cancel;

interface Game {
    id: number;
    name: string;
}
interface GameResponse{
    count: number;
    results: Game[];
}
function useGames() {
    const [games, setGames] = useState<Game[]>([])
    const [errors, setErrors] = useState("")

    useEffect(() => {

        const controller = new AbortController();
        apiClient.get<GameResponse>('/games', { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch(err => {
                if(err instanceof cancel)
                    return;
                setErrors(err.message)});

        return () => controller.abort();
    }, []);

    return {games, errors}
}

export default useGames