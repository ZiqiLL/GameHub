import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, Image} from "@chakra-ui/react";

interface Pros{
    game: Game;
}
function GameCard( { game} : Pros ) {
    return (
      <Card borderRadius={15} overflow={"hidden"}>
          <Image src={game.background_image}></Image>
          <CardBody>
              <Heading fontStyle={'2xl'}>{game.name}</Heading>
          </CardBody>
      </Card>
    );
}

export default GameCard;