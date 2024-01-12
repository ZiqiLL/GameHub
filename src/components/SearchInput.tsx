import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch, SiProsieben} from "react-icons/all";
import {useRef} from "react";

interface Pros {
    onSearch: (searchText: string) => void;
}
function SearchInput({ onSearch }: Pros) {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <form style={{width: '100%'}} onSubmit={event => {
            event.preventDefault();
            if (ref.current) {
                onSearch(ref.current.value)
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled'></Input>
            </InputGroup>
        </form>
    )
}

export default SearchInput;