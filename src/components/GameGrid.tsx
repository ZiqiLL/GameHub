import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";



function GameGrid() {
    const {games, errors} = useGames()

    return (
        <>
        {errors && <Text>{errors}</Text>}
        <SimpleGrid columns={3} spacing={10}>
            {games.map(game => <GameCard game={game} key={game.id} />)}
        </SimpleGrid>
        </>
    )
}

export default GameGrid