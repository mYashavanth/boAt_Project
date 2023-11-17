import { Box, Text } from "@chakra-ui/react";
import React, { useRef } from "react";

const Video = ({value}) => {
  const videoRef = useRef(null);

  const handleHover = () => {
    videoRef.current.play().catch((error) => {
      console.error("Error playing video:", error);
    });
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  console.log(value)

  return (
    <Box>
      <Box width={"310px"} borderRadius={"20px"}>
        <video
          ref={videoRef}
          muted
          playsInline
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          style={{borderRadius:"20px"}}
        >
          <source
            src={value.video}
            type="video/mp4"
          />
        </video>
        <Text textAlign={"center"}>
          <b>{value.category}</b>
        </Text>
      </Box>
    </Box>
  );
};

export default Video;
