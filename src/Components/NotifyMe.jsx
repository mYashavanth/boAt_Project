import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  InputGroup,
  InputLeftAddon,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function NotifyMe({ ele }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [phNum,setPhNum] = useState("")
  function handlePhNum(e){
    setPhNum(e.target.value)
  }

  function handleSubmit() {
    if (phNum.length == 10) {
      toast({
        title: "Request Succesfull.",
        description: "You Will Rciev A Notification When This Product is Available.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
    } else {
      toast({
        title: "Request Falied.",
        description: "Enter A Valied Mobile Number.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <>
      <Button
        onClick={onOpen}
        textAlign={"center"}
        width={"90%"}
        marginLeft={"15px"}
        top={"32px"}
        border={"1px solid #1A2024"}
        // backgroundColor={"#1A2024"}
        // color={"white"}
        // _hover={{ backgroundColor: "#1A2024" }}
      >
        Notify Me
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <b style={{ fontSize: "18px" }}>Notify me</b>
            <b style={{ fontSize: "24px" }}>when Available</b>
          </ModalHeader>
          <Box display={"flex"} w={"80%"} m={"auto"}>
            <img
              src={ele.img}
              alt="img"
              style={{ width: "100px", borderRadius: "10px" }}
            />
            <Box pl={"20px"}>
              <Heading size={"md"}>{ele.name}</Heading>
              <Box display={"flex"}>
                  <StarIcon color={"gold"} marginTop={1} />
                  <Text>{ele.Rating.stars} | </Text>
                  <Text>{ele.Rating.count}</Text>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Mask_group-10.png?v=1677571152"
                    alt=""
                    style={{
                      height: "16px",
                      width: "16px",
                      marginTop: "5px",
                      marginLeft: "5px",
                    }}
                  />
                </Box>
            </Box>
          </Box>
          <ModalCloseButton />
          <ModalBody
            pb={6}
            backgroundColor={"#EFF4F7"}
            w={"90%"}
            m={"auto"}
            borderRadius={"15px"}
            mb={"25px"}
            mt={"25px"}
          >
            <Box w={"70%"} m={"auto"}>
              <FormControl>
                <FormLabel>Enter Mobile Number</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+91" />
                  <Input type="tel" placeholder="phone number" value={phNum} onChange={handlePhNum} />
                </InputGroup>
              </FormControl>
              <Button
                onClick={handleSubmit}
                w={"60%"}
                ml={"70px"}
                mt={"20px"}
                mb={"20px"}
                backgroundColor={"#D0D9DE"}
              >
                Notify Me
              </Button>
              <Text textAlign={"center"} fontSize={"13px"} color={"gray"}>
                By Confirming, you agree to boAt's Terms and Conditions and
                Privacy Policy.
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
