import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Box, Heading, Text } from "@chakra-ui/react";
import AddToCart from "./AddToCart";
import { StarIcon } from "@chakra-ui/icons";

export default function Details() {
  const { details } = useContext(AuthContext);
  const [image, setImage] = useState(details.images[0]);
  // console.log(details.waranty.img);
  // console.log(image);
  return (
    <>
      <Box
        display={"flex"}
        w={"96%"}
        m={"auto"}
        mt={"40px"}
        justifyContent={"space-around"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          borderRadius={"5px"}
          w={"5%"}
          alignItems={"center"}
        >
          {details.images.map((ele) => (
            <img
              src={ele}
              alt=""
              key={ele}
              style={{
                width: "65px",
                border: "1px solid gray",
                borderRadius: "5px",
                padding: "2px",
              }}
              onMouseEnter={() => setImage(ele)}
            />
          ))}
        </Box>
        <Box w={"42%"}>
          <img
            src={image}
            alt=""
            style={{ borderRadius: "20px" }}
          />
        </Box>
        <Box
          w={"50%"}
          p={"30px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"25px"}
        >
          <Box display={"flex"}>
            <StarIcon color={"gold"} marginTop={1} />
            <Text>{details.Rating.stars} | </Text>
            <Text>{details.Rating.count}</Text>
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
          <Heading>{details.name}</Heading>
          <Text>{details.detail}</Text>
          <Box display={"flex"} gap={"20px"}>
            <Text fontSize={"20px"}>₹{details.newPrice}</Text>
            <Text fontSize={"16px"} textDecoration={"line-through"}>
              ₹{details.oldPrice}
            </Text>
          </Box>
          <Text color={"#00C68C"}>{details.discount} off</Text>
          <AddToCart ele={details} />
        </Box>
      </Box>

      <Box
        display={"flex"}
        w={"78%"}
        m={"auto"}
        justifyContent={"space-evenly"}
        mt={"30px"}
      >
        <Box>
          <img src={details.waranty.img} alt="warranty" />
          <Text>
            <b>{details.waranty.time}</b>{" "}
          </Text>
        </Box>
        <Box>
          <img src={details.replavement.img} alt="warranty" />
          <Text>
            <b>{details.replavement.time}</b>{" "}
          </Text>
        </Box>
        <Box>
          <img src={details.shipping.img} alt="warranty" />
          <Text>
            <b>{details.shipping.type}</b>{" "}
          </Text>
        </Box>
        <Box>
          <img src={details.gst.img} alt="warranty" />
          <Text>
            <b>{details.gst.type}</b>{" "}
          </Text>
        </Box>
      </Box>
    </>
  );
}
