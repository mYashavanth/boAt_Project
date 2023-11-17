import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const CofirmOrder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { finalData, setFinalData,cartData ,setCartData} =
    useContext(AuthContext);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    houseNo: "",
    street: "",
    place: "",
    town: "",
    city: "",
    pincode: "",
    mobileNum: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFinalData([...finalData,{"userDetails":user,"products":cartData}])
    setCartData([])
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const style = {
    border: "1px solid #1A2024",
    borderRadius: "4px",
    padding: "5px",
    width: "100%",
  };

  // console.log(cartData,finalData)
  return (
    <>
      <Button
        onClick={onOpen}
        w={"100%"}
        backgroundColor={"#1A2024"}
        color={"white"}
        _hover={{ backgroundColor: "none" }}
      >
        Confirm Order
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Your Details and Proceed</ModalHeader>
          <ModalCloseButton />
          <ModalBody w={"70%"} m={"auto"}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="firstName">
                First Name <b>:</b>
              </label>
              <br />
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                placeholder="First Name"
                onChange={handleChange}
                style={style}
              />
              <br />

              <label htmlFor="lastName">
                Last Name <b>:</b>
              </label>
              <br />
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                placeholder="Last Name"
                onChange={handleChange}
                style={style}
              />
              <br />

              <label htmlFor="houseNo">
                House Number <b>:</b>
              </label>
              <br />
              <input
                type="text"
                name="houseNo"
                value={user.houseNo}
                placeholder="House Number"
                onChange={handleChange}
                style={style}
              />
              <br />

              <label htmlFor="street">
                Street <b>:</b>
              </label>
              <br />
              <input
                type="text"
                name="street"
                value={user.street}
                placeholder="Street"
                onChange={handleChange}
                style={style}
              />
              <br />

              <label htmlFor="place">
                Place <b>:</b>
              </label>
              <br />
              <input
                type="text"
                name="place"
                value={user.place}
                placeholder="Place"
                onChange={handleChange}
                style={style}
              />
              <br />

              <label htmlFor="town">
                Town <b>:</b>
              </label>
              <br />
              <input
                type="text"
                name="town"
                value={user.town}
                placeholder="Town"
                onChange={handleChange}
                style={style}
              />
              <br />

              <label htmlFor="city">
                City <b>:</b>
              </label>
              <br />
              <input
                type="text"
                name="city"
                value={user.city}
                placeholder="City"
                onChange={handleChange}
                style={style}
              />
              <br />

              <label htmlFor="pincode">
                Pincoe <b>:</b>
              </label>
              <br />
              <input
                type="number"
                name="pincode"
                value={user.pincode}
                placeholder="Pincoe"
                onChange={handleChange}
                style={style}
              />
              <br />

              <label htmlFor="mobileNum">
                Mobile Number <b>:</b>
              </label>
              <br />
              <input
                type="number"
                name="mobileNum"
                value={user.mobileNum}
                placeholder="Mobile Number"
                onChange={handleChange}
                style={style}
              />
              <br />

              <input
                type="submit"
                style={{
                  backgroundColor: "#1A2024",
                  color: "white",
                  borderRadius: "4px",
                  padding: "3px",
                  width: "140px",
                  marginLeft: "60px",
                  marginTop: "20px",
                  height: "40px",
                }}
              />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CofirmOrder;
