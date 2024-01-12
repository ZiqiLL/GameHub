import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Image, Text} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Pros{
    game: Game;
}
function GameCard( { game} : Pros ) {
    return (
      <Card borderRadius={15} overflow={"hidden"}>
          <Image src={game.background_image}></Image>
          <CardBody>
              <Heading fontStyle={'2xl'}>{game.name}</Heading>
              <HStack justifyContent={'space-between'}>
                  <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                  <CriticScore score={game.metacritic}/>
              </HStack>
          </CardBody>
      </Card>
    );
}

export default GameCard;