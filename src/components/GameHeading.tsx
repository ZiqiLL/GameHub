import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App";

interface Pros {
    gameQuery: GameQuery;
}
function GameHeading( { gameQuery }: Pros ) {

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

    return (
        <Heading as={'h1'} paddingLeft={2} marginBottom={2} fontSize={'5xl'}>{heading}</Heading>
    )
}

export default GameHeading;