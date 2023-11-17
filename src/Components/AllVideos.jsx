import { Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import Video from "./Video";
import { wrap } from "framer-motion";

export default function AllVideos() {
  const { datas } = useContext(AuthContext);

  console.log(datas.videos[0].category);

  return (
    <>
      <Text  w={"85%"} m={"auto"} mt={"40px"} mb={"20px"} fontSize={"24px"}>
        Explore <b>Bestsellers</b>
      </Text>
      <Box
        display={"flex"}
        gap={"40px"}
        flexWrap={"wrap"}
        w={"80%"}
        m={"auto"}
        justifyContent={"center"}
      >
        {datas.videos.map((ele) => (
          <Video value={ele} key={ele.video} />
        ))}
      </Box>
    </>
  );
}
