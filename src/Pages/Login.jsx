import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  FormLabel,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContextProvider";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  async function fetchData(e) {
    e.preventDefault();
    try {
      let res = await axios.post(`https://reqres.in/api/login`, user);
    //   console.log(res);
      if (res.status == 200) {
        toast({
          title: "Account created.",
          description: "Your Account Has Been Created Successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        setIsAuth(true);
        onClose();
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Account creation Falied.",
        description: "Enter Valied Data.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setIsAuth(false);
    }
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.type]: e.target.value });
  }
  

//   console.log(user);
//   console.log(isAuth);
  return (
    <>
      <Button
        onClick={onOpen}
        w={"100%"}
        backgroundColor={"#1A2024"}
        color={"white"}
        _hover={{ backgroundColor: "none" }}
      >
        Login
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody data-cy="chakra-modal" pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                ref={initialRef}
                placeholder="Email"
                onChange={(e) => handleChange(e)}
                value={user.email}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
                value={user.password}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={fetchData}
              colorScheme="blue"
              w={"100%"}
              backgroundColor={"#1A2024"}
              color={"white"}
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
