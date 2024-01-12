import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";



function GameGrid() {
    const {games, errors} = useGames()

    return (
        <>
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={'10px'} spacing={10}>
            {games.map(game => <GameCard game={game} key={game.id} />)}
        </SimpleGrid>
        </>
    )
}

export default GameGrid