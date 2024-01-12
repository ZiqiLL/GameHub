import useGenres from "../hooks/useGenres";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";


function GenreList() {
    const {genres, errors, isLoading} = useGenres()

    return (
        <List>
            {genres.map( genre =>
                <ListItem key={genre.id} paddingY='8px'>
                    <HStack>
                        <Image
                            boxSize='32px'
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}>
                        </Image>
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>)}
        </List>
    )

}

export default GenreList;