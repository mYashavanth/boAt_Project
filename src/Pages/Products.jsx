import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { ArrowForwardIcon, StarIcon } from "@chakra-ui/icons";
import AddToCart from "../Components/AddToCart";
import NotifyMe from "../Components/NotifyMe";
import { Navigate } from "react-router-dom";
import Faq from "../Components/Faq";

export default function Products() {
  const { prodName, datas, setDetails, details } = useContext(AuthContext);
  const [datasToDisplay, setDatasToDisplay] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const newArr = [];
    datas.products.map((ele) => {
      if (ele.category.toLowerCase().includes(prodName.toLowerCase())) {
        newArr.push(ele);
        setDatasToDisplay(newArr);
      }
    });
  }, [prodName]);
  function handleClickText(ele) {
    setDetails(ele);
    setFlag(true);
  }
  document.title="boAt,Products"

  // console.log(datasToDisplay);
  // console.log(datas.products);
  // console.log(details);
  if (flag) {
    return <Navigate to={"/products/item"} />;
  }

  return (
    <>
      <img
        src="https://www.boat-lifestyle.com/cdn/shop/files/Personalisation_CP_Banner_Desk__1_20cd40bd-443a-4cc8-8c4c-387df8012f3c.png?v=1699340631"
        alt="img"
      />
      <Heading fontSize={"24px"} margin={"30px"} pt={"40px"}>
        {prodName}
      </Heading>

      <Grid templateColumns="repeat(3, 1fr)" gap={5} w={"95%"} m={"auto"}>
        {datasToDisplay.map((ele) => (
          <GridItem
            w="100%"
            bg="#FAFAFA"
            display={"flex"}
            p={"8px"}
            borderRadius={"10px"}
            justifyContent={"space-between"}
            key={ele.id}
          >
            <Box borderRadius={"10px"} w={"32%"}>
              <img
                src={ele.img}
                alt=""
                width={"150px"}
                style={{ borderRadius: "10px 10px 0px 0px" }}
              />
              <Text
                backgroundColor={"gold"}
                borderRadius={"0px 0px 10px 10px"}
                textAlign={"center"}
              >
                {ele.playBack}
              </Text>
              <Text
                textAlign={"center"}
                color={"#2F5BA0"}
                fontWeight={"bold"}
                letterSpacing={"0.5px"}
                onClick={() => handleClickText(ele)}
                cursor={"pointer"}
              >
                Viev Product <ArrowForwardIcon />
              </Text>
            </Box>
            <Box w={"66%"} borderRadius={"10px"}>
              <Box display={"flex"} justifyContent={"space-between"}>
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
                {ele.bestSeller != "" && (
                  <Box display={"flex"}>
                    <img
                      src={ele.bestSeller}
                      alt=""
                      style={{
                        height: "16px",
                        width: "16px",
                        marginTop: "5px",
                        marginLeft: "5px",
                      }}
                    />
                    <Text>Best Seller</Text>
                  </Box>
                )}
              </Box>
              <Box>
                <Heading size={"md"}>{ele.name}</Heading>
                <Text>
                  <b>{ele.newPrice} </b>
                  <span
                    style={{
                      color: "gray",
                      fontSize: "13px",
                      textDecoration: "line-through",
                    }}
                  >
                    {ele.oldPrice}
                  </span>
                  <span style={{ color: "#12B985", fontSize: "13px" }}>
                    {" "}
                    {ele.discount}off
                  </span>
                </Text>
              </Box>

              <hr style={{ marginTop: "4px", marginBottom: "8px" }} />

              <Box display={"flex"}>
                {ele.featurs.map((ele) => (
                  <Text
                    margin={"4px"}
                    backgroundColor={"#EFF4F7"}
                    borderRadius={"20px"}
                    p={1}
                    fontSize={"12px"}
                    key={ele}
                  >
                    {ele}
                  </Text>
                ))}
              </Box>
              {ele.isAvailable ? (
                <AddToCart ele={ele} />
              ) : (
                <NotifyMe ele={ele} />
              )}
            </Box>
          </GridItem>
        ))}
      </Grid>
      <img
        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/final-loader.gif?v=1670845994"
        alt="boAt"
        style={{
          width: "50px",
          margin: "auto",
          marginBottom: "60px",
        }}
      />
      <Faq />

    </>
  );
}
