import {useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {AxiosRequestConfig, CanceledError} from "axios";
import {Genre} from "./useGenres";

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
function useGames( selectedGenre: Genre | null) {
    const requestConfig: AxiosRequestConfig  = { params: { genres: selectedGenre?.id}}
    const [games, setGames] = useState<Game[]>([])
    const [errors, setErrors] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const controller = new AbortController();


        setIsLoading(true)
        apiClient.get<GameResponse>('/games', { signal: controller.signal, ...requestConfig })
            .then(res => {
                setGames(res.data.results);
                setIsLoading(false);
            })
            .catch(err => {
                if(err instanceof CanceledError) return;
                setErrors(err.message);
                setIsLoading(false)
            });

        return () => controller.abort();
    }, [selectedGenre?.id]);

    return {games, errors, isLoading}
}

export default useGames