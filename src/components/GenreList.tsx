import useGenres, {Genre} from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Pros {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}
function GenreList({ onSelectGenre, selectedGenre } : Pros) {
    const {data, errors, isLoading} = useGenres();

    if (errors) return null;
    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize='2xl' marginBottom={2}>
                Genres
            </Heading>
            <List>
                {data.map( genre =>
                    <ListItem key={genre.id} paddingY='8px'>
                        <HStack>
                            <Image
                                boxSize='32px'
                                borderRadius={8}
                                objectFit='cover'
                                src={getCroppedImageUrl(genre.image_background)}>
                            </Image>
                            <Button textAlign='left' whiteSpace='normal' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant={'link'}>{genre.name}</Button>
                        </HStack>
                    </ListItem>)}
            </List>
        </>

    )

}

export default GenreList;