import React, { useContext, useRef } from "react";
import img from "../boAtImg/boAtBag.png";
import Login from "../Pages/Login";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Center,
  Text,
  Heading,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CofirmOrder from "./ConfirmOrder";

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartData, setCartData, isAuth } = useContext(AuthContext);
  const btnRef = React.useRef();
  const amount = useRef(0);

  const handleDelete = (id) => {
    let newArr = cartData.filter((ele) => {
      if (ele.id == id) {
        return false;
      } else {
        return true;
      }
    });
    setCartData(newArr);
  };
  if (amount.current > 0) {
    amount.current = 0;
  }
  cartData.map((ele) => {
    amount.current = amount.current + ele.data.newPrice;
  });
  
  // console.log("amount:", amount.current);
  // console.log(cartData.length);
  return (
    <>
      <Button ref={btnRef} colorScheme="white" onClick={onOpen} p={0}>
        <Center w={"22px"}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/468/468209.png"
            alt=""
          />
        </Center>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        {cartData.length == 0 ? (
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Cart</DrawerHeader>

            <DrawerBody
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"20px"}
            >
              <img src={img} alt="" />
              <Heading size={"md"}>Your cart is feeling lonely</Heading>
              <Link to={"/products"}>
                <Button
                  onClick={onClose}
                  letterSpacing={1}
                  h={"50px"}
                  w={"180px"}
                  backgroundColor={"#1A2024"}
                  color={"white"}
                  _hover={{ backgroundColor: "#1A2024" }}
                >
                  <b>Start Shoping</b>
                </Button>
              </Link>
            </DrawerBody>
          </DrawerContent>
        ) : (
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Cart</DrawerHeader>

            <DrawerBody>
              {cartData.map((ele) => (
                <Box
                  mb={1}
                  borderRadius={10}
                  backgroundColor={"#FAFAFA"}
                  borderRight={20}
                  key={ele.id}
                >
                  <Box
                    display={"flex"}
                    gap={"15px"}
                    w={"80%"}
                    m={"auto"}
                    p={"4px"}
                  >
                    <Box>
                      <img
                        src={ele.data.img}
                        alt="img"
                        style={{ width: "80px", borderRadius: "10px" }}
                      />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      w={"80%"}
                    >
                      <Box>
                        <Text>
                          <b>{ele.data.name}</b>
                        </Text>
                        <Text>
                          <b>₹{ele.data.newPrice}</b>
                        </Text>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"flex-end"}
                      >
                        <Button onClick={() => handleDelete(ele.id)}>-</Button>
                      </Box>
                    </Box>
                  </Box>
                  <hr />
                  <hr />
                </Box>
              ))}
            </DrawerBody>

            <DrawerFooter display={"flex"} justifyContent={"space-between"}>
              <Box display={"flex"}>
                <Box>
                  <Text>
                    <b>₹{amount.current}</b>
                  </Text>
                  <Text fontSize={"13px"}>
                    <i>inclusive of all taxes</i>
                  </Text>
                </Box>
                <Center>
                  <ChevronDownIcon />
                </Center>
              </Box>
              <Box w={"60%"}>{isAuth ? <CofirmOrder /> : <Login />}</Box>
            </DrawerFooter>
          </DrawerContent>
        )}
      </Drawer>
    </>
  );
}
