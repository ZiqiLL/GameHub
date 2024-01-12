import {useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {Simulate} from "react-dom/test-utils";
import cancel = Simulate.cancel;

export interface Platform{
    id: number;
    slug: string;
    name: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform}[];
    metacritic: number;
}
interface GameResponse{
    count: number;
    results: Game[];
}
function useGames() {
    const [games, setGames] = useState<Game[]>([])
    const [errors, setErrors] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const controller = new AbortController();


        setIsLoading(true)
        apiClient.get<GameResponse>('/games', { signal: controller.signal })
            .then(res => {
                setGames(res.data.results);
                setIsLoading(false);
            })
            .catch(err => {
                if(err instanceof cancel) return;
                setErrors(err.message);
            });

        return () => controller.abort();
    }, []);

    return {games, errors, isLoading}
}

export default useGames