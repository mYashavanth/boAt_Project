import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function MoreMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        _hover={{
          textDecoration: "underline",
          fontWeight: "bold",
        }}
        aria-label="Courses"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        height={"100%"}
      >
        More <ChevronDownIcon />
      </MenuButton>
      <MenuList mt={-2} onMouseEnter={onOpen} onMouseLeave={onClose} fontFamily={"arial"}>
        <MenuItem
          _hover={{
            color: "gray",
          }}
          backgroundColor={"white"}
        >
          Do What FloAts Your boAt
        </MenuItem>
        <MenuItem
          _hover={{
            color: "gray",
          }}
          backgroundColor={"white"}
        >
          Blogs
        </MenuItem>
        <MenuItem
          _hover={{
            color: "gray",
          }}
          backgroundColor={"white"}
        >
          Earn ₹100
        </MenuItem>
        <MenuItem
          _hover={{
            color: "gray",
          }}
          backgroundColor={"white"}
        >
          Careers
        </MenuItem>
        <MenuItem
          _hover={{
            color: "gray",
          }}
          backgroundColor={"white"}
        >
          Social Responsibility
        </MenuItem>
        <MenuItem
          _hover={{
            color: "gray",
          }}
          backgroundColor={"white"}
        >
          Store Locator
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
