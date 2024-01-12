import useGenres, {Genre} from "../hooks/useGenres";
import {Button, HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Pros {
    onSelectGenre: (genre: Genre) => void;
}
function GenreList({ onSelectGenre } : Pros) {
    const {genres, errors, isLoading} = useGenres()

    if (errors) return null;
    if (isLoading) return <Spinner />;

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
                        <Button onClick={() => onSelectGenre(genre)} fontSize='lg' variant={'link'}>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
        </List>
    )

}

export default GenreList;