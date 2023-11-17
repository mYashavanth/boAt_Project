import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";

export default function AddToCart({ ele }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { cartData, setCartData, details, setDetails } =
    useContext(AuthContext);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    setCartData([
      ...cartData,
      { id: Date.now() + ele.name + Math.random(), data: ele },
    ]);
    toast({
      title: "Added Successfully",
      description: "Your Product is Successfully Added to Cart .",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }
  function handleClickText() {
    setDetails(ele);
    setFlag(true);
  }

  if (flag) {
    return <Navigate to={"/products/item"} />;
  }

  // console.log(cartData);
  //   console.log(ele)
  return (
    <>
      <Button
        onClick={onOpen}
        textAlign={"center"}
        width={"90%"}
        marginLeft={"15px"}
        top={"32px"}
        backgroundColor={"#1A2024"}
        color={"white"}
        _hover={{ backgroundColor: "#1A2024" }}
      >
        Add To Cart
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"3xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={1} display={"flex"}>
            <Box>
              <ModalFooter>
                <Box>
                  <img
                    src={ele.img}
                    alt=""
                    width={"220px"}
                    style={{ borderRadius: "10px", marginBottom: "10px" }}
                  />
                  <Button
                    mr={3}
                    backgroundColor={"#1A2024"}
                    mb={"10px"}
                    color={"white"}
                    w={"100%"}
                    _hover={{ backgroundColor: "#1A2024" }}
                    onClick={handleClick}
                  >
                    Add To Cart
                  </Button>
                  <Text
                    textAlign={"center"}
                    color={"#2F5BA0"}
                    fontWeight={"bold"}
                    letterSpacing={"0.5px"}
                    onClick={handleClickText}
                    cursor={"pointer"}
                  >
                    Viev Product <ArrowForwardIcon />
                  </Text>
                </Box>
              </ModalFooter>
            </Box>
            <Box
              width={"70%"}
              margin={"20px 30px 20px 0px"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Heading fontSize={"24px"} fontFamily={"arial"}>
                <b>{ele.name}</b>
              </Heading>
              <Text pt={"20px"} fontSize={"20px"}>
                <b> ₹{ele.newPrice} </b>
                <span
                  style={{
                    color: "gray",
                    fontSize: "14px",
                    textDecoration: "line-through",
                  }}
                >
                  ₹{ele.oldPrice}
                </span>
                <span style={{ color: "#12B985", fontSize: "14px" }}>
                  {" "}
                  {ele.discount}off
                </span>
              </Text>
              <Text fontSize={"10px"} pb={"20px"}>
                <i>Inclusive of all Taxes</i>
              </Text>
              <Box
                display={"flex"}
                backgroundColor={"#EFF4F7"}
                flexWrap={"wrap"}
                borderRadius={"20px"}
              >
                {ele.featurs.map((ele) => (
                  <Center
                    margin={"4px"}
                    backgroundColor={"#EFF4F7"}
                    borderRadius={"20px"}
                    p={1}
                    fontSize={"12px"}
                    height={"60px"}
                    width={"40%"}
                    key={ele}
                  >
                    <li>{ele}</li>
                  </Center>
                ))}
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
