import {Badge} from "@chakra-ui/react";

interface Pros{
    score: number;
}
function CriticScore( { score }: Pros ) {

    let color = score > 85 ? 'green' : score > 60 ? 'yellow' : '';

    return <Badge colorScheme={color} fontSize={'14px'} paddingX={2} borderRadius={'4px'}>{score}</Badge>
}

export default CriticScore;