import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";

function SortSelector() {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon = {<BsChevronDown/>}>order by: Relevance</MenuButton>
            <MenuList>
                <MenuItem>1</MenuItem>
                <MenuItem>1</MenuItem>
                <MenuItem>1</MenuItem>
                <MenuItem>1</MenuItem>
                <MenuItem>1</MenuItem>
                <MenuItem>1</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SortSelector;