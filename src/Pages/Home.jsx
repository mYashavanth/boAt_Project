import React, { useContext } from "react";
import ImageSlider from "../Components/ImageSlider";
import AllVideos from "../Components/AllVideos";
import { AuthContext } from "../Context/AuthContextProvider";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  const { datas } = useContext(AuthContext);
  document.title = "boAt,Home";
  return (
    <>
      <ImageSlider />
      <AllVideos />
      <Box
        display={"flex"}
        w={"78%"}
        m={"auto"}
        justifyContent={"space-evenly"}
        mt={"40px"}
      >
        <Box>
          <img src={datas.products[0].waranty.img} alt="warranty" />
          <Text>
            <b>{datas.products[0].waranty.time}</b>{" "}
          </Text>
        </Box>
        <Box>
          <img src={datas.products[0].replavement.img} alt="warranty" />
          <Text>
            <b>{datas.products[0].replavement.time}</b>{" "}
          </Text>
        </Box>
        <Box>
          <img src={datas.products[0].shipping.img} alt="warranty" />
          <Text>
            <b>{datas.products[0].shipping.type}</b>{" "}
          </Text>
        </Box>
        <Box>
          <img src={datas.products[0].gst.img} alt="warranty" />
          <Text>
            <b>{datas.products[0].gst.type}</b>{" "}
          </Text>
        </Box>
      </Box>
    </>
  );
}
