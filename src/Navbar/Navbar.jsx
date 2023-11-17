import {
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import MoreMenu from "../Components/MoreMenu";
import CategoryMenu from "../Components/CategoryMenu";
import Search from "../Components/Search";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Login from "../Pages/Login";
import Cart from "../Components/Cart";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Navbar() {
  const { cartData } = useContext(AuthContext);
  return (
    <>
      <Box className={styles.ParentDiv} fontFamily={"arial"}>
        <Flex className={styles.parentContainer} backgroundColor={"white"}>
          <Box w="11%" pt={6}>
            <Link to={"/"}>
              <img
                src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434"
                alt="boAt"
                width={86}
              />
            </Link>
          </Box>
          <Center w="64%" color={"black"} justifyContent={"flex-start"}>
            <Center
              w={"70%"}
              justifyContent={"space-around"}
              h={"100%"}
              fontSize={"16px"}
            >
              <CategoryMenu />
              <Box _hover={{ textDecoration: "underline", fontWeight: "bold" }}>
                <Link to={"/"}>Daily Deals</Link>
              </Box>
              <Box _hover={{ textDecoration: "underline", fontWeight: "bold" }}>
                <Link to={"/"}>Gift with boAt</Link>
              </Box>
              <Box _hover={{ textDecoration: "underline", fontWeight: "bold" }}>
                <Link to={"/"}>Corporate Orders</Link>
              </Box>
              <MoreMenu />
            </Center>
          </Center>
          <Center w="27%" display={"flex"} justifyContent={"space-around"}>
            <Search />
            <Center w={"20px"}>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      isActive={isOpen}
                      as={Button}
                      p={2}
                      backgroundColor={"white"}
                      color={"black"}
                      _hover={{ backgroundColor: "white" }}
                    >
                      <img
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Profile-1.png?v=1663762989"
                        alt=""
                      />
                    </MenuButton>
                    <MenuList color={"black"} fontFamily={"arial"}>
                      <p style={{ fontSize: "13px", marginLeft: "8px" }}>
                        {" "}
                        <b>Hi boAthead!</b>{" "}
                      </p>
                      <MenuItem _hover={{ backgroundColor: "white" }}>
                        <Login />
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Center>

            <Cart />
            {/* {cartData >= 1 && (
              <Text
                color={"black"}
                position={"relative"}
                right={"30px"}
                bottom={"5px"}
                fontSize={"13px"}
                backgroundColor={"#FF0000"}
                w={"20px"}
                textAlign={"center"}
                borderRadius={"50%"}
              >
                3
              </Text>
            )} */}
          </Center>
        </Flex>
      </Box>
      <hr />
      <img
        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Chat-Icon.jpg?v=1690367119"
        alt=""
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          width: "45px",
          borderRadius: "50%",
        }}
      />
    </>
  );
}
