import "./navbar.css";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Button,
  Input,
  InputLeftElement,
  InputGroup,
  Icon,
} from "@chakra-ui/react";

import { PhoneIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-parent">
      <div className="navbar-logo">
        <p>My-Agri</p>
      </div>
      <div className="navbar-links">
        <Menu>
          <MenuButton fontWeight={400} rightIcon={<ChevronDownIcon />}>
            Categories
          </MenuButton>
          <MenuList>
            <MenuItem>Category1</MenuItem>
            <MenuItem>Category2</MenuItem>
            <MenuItem>Category3</MenuItem>
            <MenuItem>Category4</MenuItem>
          </MenuList>
        </Menu>
        <Link>Deals</Link>
        <Link>What's New</Link>
        <Link>Delivery</Link>
      </div>
      <div className="navbar-btns">
        <InputGroup
          width={{ lg: "200px", xl: "full" }}
          display={{ base: "none", md: "flex" }}
          rounded={"full"}
        >
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input rounded={"full"} type="" placeholder="Search..." />
        </InputGroup>

        <Button
          fontWeight={400}
          fontSize={"14px"}
          leftIcon={<Icon height={"16px"} width={"16px"} as={AiOutlineUser} />}
          rounded={"full"}
          padding={{ base: "10px 10px", sm: "10px 20px", md: "10px 30px" }}
          alignItems={"center"}
        >
          Account
        </Button>

        <Button
          fontWeight={400}
          fontSize={"14px"}
          leftIcon={<Icon height={"16px"} width={"16px"} as={BsCart2} />}
          rounded={"full"}
          padding={{ base: "10px 10px", sm: "10px 20px", md: "10px 30px" }}
          alignItems={"center"}
        >
          Cart
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
