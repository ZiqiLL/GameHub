import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";

function PlatformSelector() {
    return (
        <Menu>
           <MenuButton as={Button} rightIcon = {<BsChevronDown/>}>Platform</MenuButton>
            <MenuList>
                <MenuItem>Item1</MenuItem>
                <MenuItem>Item2</MenuItem>
                <MenuItem>Item3</MenuItem>
                <MenuItem>Item4</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;