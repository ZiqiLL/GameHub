import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatforms from "../hooks/usePlatforms";
import {Platform} from "../hooks/useGames";

interface Pros{
    onSelectedPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}
function PlatformSelector( {onSelectedPlatform, selectedPlatform} : Pros ) {
    const {data, errors} = usePlatforms();
    if(errors) return null;
    return (
        <Menu>
           <MenuButton as={Button} rightIcon = {<BsChevronDown/>}>{selectedPlatform?.name || 'Platform'}</MenuButton>
            <MenuList>
                {data.map( platform => <MenuItem onClick={() => onSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;