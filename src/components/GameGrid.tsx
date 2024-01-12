import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";



function GameGrid() {
    const {games, errors, isLoading} = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    return (
        <>
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={'10px'} spacing={10}>
            {isLoading && skeletons.map( skeleton => <GameCardSkeleton key={skeleton}/>)}
            {games.map(game => <GameCard game={game} key={game.id} />)}
        </SimpleGrid>
        </>
    )
}

export default GameGrid