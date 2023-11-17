import { ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <>
      <Box
        display={"flex"}
        w={"98%"}
        backgroundColor={"#E7F0F5"}
        m={"auto"}
        p={"50px"}
        gap={"10%"}
        mt={"80px"}
        // justifyContent={"space-between"}
      >
        <Box>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo.svg"
            alt=""
          />
          <Heading size={"md"} fontSize={"24px"} pt={"18px"} pb={"5px"}>
            Subscribe to our email alerts!
          </Heading>
          <InputGroup
            w={"110%"}
            backgroundColor={"whitesmoke"}
            borderRadius={"10px"}
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              h={"50px"}
              borderRadius={"10px"}
            />
            <InputRightElement top={1}>
              <ArrowForwardIcon />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box fontSize={"14px"}>
          <Text mb={"15px"}>
            <b>Shop</b>
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} fontSize={"13px"}>
            <GridItem
              w="100%"
              h="10"
              display={"flex"}
              flexDirection={"column"}
              gap={"15px"}
            >
              <Text>True Wireless Earbuds</Text>
              <Text>Wired Headphones</Text>
              <Text>Home Audio</Text>
              <Text>Smart Watches</Text>
              <Text>Misfit Trimmers</Text>
            </GridItem>
            <GridItem
              w="100%"
              h="10"
              display={"flex"}
              flexDirection={"column"}
              gap={"15px"}
            >
              <Text>Wireless Headphones</Text>
              <Text>Wireless Speakers</Text>
              <Text>Mobile Accessories</Text>
              <Text>TRebel</Text>
              <Text>Earn ₹100</Text>
            </GridItem>
          </Grid>
        </Box>
        <Box fontSize={"14px"}>
          <Text mb={"15px"}>
            <b>Help</b>
          </Text>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"15px"}
            fontSize={"13px"}
          >
            <Text>Track Your Order</Text>
            <Text>Return Policy</Text>
            <Text>Bulk Orders</Text>
            <Text>Why Buy Direct</Text>
            <Text>Warranty & Support</Text>
            <Text>Service Centers</Text>
            <Text>FAQs</Text>
          </Box>
        </Box>
        <Box fontSize={"14px"}>
          <Text mb={"15px"}>
            <b>Company</b>
          </Text>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"15px"}
            fontSize={"13px"}
          >
            <Text>About boAt</Text>
            <Text>read Our Blog</Text>
            <Text>Security</Text>
            <Text>Social Responcibility</Text>
            <Text>News</Text>
            <Text>Careers</Text>
            <Text>Investor Relations</Text>
            <Text>Warranty Policy</Text>
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        gap={"11%"}
        w={"98%"}
        p={"50px"}
        m={"auto"}
        backgroundColor={"#EFF4F7"}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"60px"}>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>True Wireless Earbuds</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Features</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Noice Cancellation Earbuds</Text>
                <Text>Gaming Earbuds</Text>
                <Text>Large Playback Earbuds</Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Price</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Earbuds Under 1000</Text>
                <Text>Earbuds Under 2000</Text>
                <Text>Earbuds Under 3000</Text>
                <Text>Earbuds Under 4000</Text>
                <Text>Earbuds Under 5000</Text>
                <Text>Earbuds Above 5000</Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>Wireless Earphones</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Features</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Noice Cancellation Earbuds</Text>
                <Text>Large Playback Earbuds</Text>
                <Text>Clear Calling Earphones</Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Price</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Neckbands Under 1000</Text>
                <Text>Neckbands Under 2000</Text>
                <Text>Neckbands Under 3000</Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>Wired Rarphones</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Features</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Wired Earphones with Mic</Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Price</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Earphones Under 500</Text>
                <Text>Earphones Under 1000</Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>Wireless Headphones</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Features</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Noice Cancellation Headphones</Text>
                <Text> wirelessGaming Headphones</Text>
                <Text>Large Playback Headphones</Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Price</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>wireless Headphones Under 1000</Text>
                <Text>wireless Headphones Under 2000</Text>
                <Text>wireless Headphones Under 3000</Text>
                <Text>wireless Headphones Under 4000</Text>
                <Text>wireless Headphones Above 4000</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"column"} gap={"60px"}>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>Wired Headphones</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Features</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Wired Headphones With Mic</Text>
                <Text>Headphones With Mic for PC</Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Price</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Wired Headphones Under 1000</Text>
                <Text>Wired Headphones Under 2000</Text>
                <Text>Wired Headphones Under 3000</Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>Gaming Headphones</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Features</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Gaming Headphones With Mic</Text>
                <Text>Low Latency Headphone</Text>
                <Text>RGB Lighnt Headphones</Text>
                <Text>headphone for PC Gaming</Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>Wireless Speakers</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Features</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Portable Speakers</Text>
                <Text>Long Playback Speakers</Text>
                <Text>Waterproof BlueTooth Speaker</Text>
                <Text>Party Speaker With Lights</Text>
                <Text>Speaker With Karoake Mic</Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Price</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Bluetooth Speakers Under 1000</Text>
                <Text>Bluetooth Speakers Under 2000</Text>
                <Text>Bluetooth Speakers Under 3000</Text>
                <Text>Bluetooth Speakers Under 5000</Text>
                <Text>Bluetooth Speakers Under 8000</Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>Soundbars</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Features</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Dolby Soundbars</Text>
                <Text>Soundbars With Wireless Subwoofer</Text>
                <Text>Soundbars With Wired Subwoofer</Text>
                <Text>Alexa Enabled Soundbars</Text>
                <Text>Bluetooth Soundbars</Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Price</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Soundbars Under 10000</Text>
                <Text>Soundbars Under 20000</Text>
                <Text>Soundbars Under 3000</Text>
                <Text>Soundbars Under 5000</Text>
                <Text>Soundbars Above 2000</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"column"} gap={"60px"}>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>Smart Watches</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Features</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Bluetooth Calling Smartwatches</Text>
                <Text>Fitness Tracker Smartwatch</Text>
                <Text>Big Display Smartwatch</Text>
                <Text>Amoled Display Smartwatch</Text>
                <Text>Sports Tracker Smartwatch</Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Price</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Smartwatch Under 1000</Text>
                <Text>Smartwatch Under 2000</Text>
                <Text>Smartwatch Under 3000</Text>
                <Text>Smartwatch Under 4000</Text>
                <Text>Smartwatch Under 5000</Text>
                <Text>Smartwatch Above 5000</Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>Trimmers</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Features</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Grooming Kit for Men</Text>
                <Text>Beard Styler</Text>
                <Text>Trimmer for Men</Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Price</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Trimmer Under 1000</Text>
                <Text>Trimmer Under 2000</Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>Limited Editions</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Limited Editions</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Limited Edition Speakers</Text>
                <Text>Limited Edition Earbuds</Text>
                <Text>Limited Editions Smart Watch</Text>
                <Text>Limited Editions Earphone</Text>
                <Text>Limited Editions Headphones</Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>Car Accessories</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Features</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Car Charger</Text>
                <Text>Aux Cable for Car</Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Price</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Car Charger Under 500</Text>
                <Text>Car Charger Above 500</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"column"} gap={"60px"}>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>Trebel Range</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Features</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Smartwatch for Women</Text>
                <Text>Earbuds for Women</Text>
                <Text>Neckband for Women</Text>
                <Text>Earphone for Women</Text>
                <Text>Headphone for Women</Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>PowerBanks</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Features</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Power Bank 10000mah</Text>
                <Text>Power Bank 20000mah</Text>
                <Text>Mobile Power Bank</Text>
                <Text>Fast Charging Power Bank</Text>
                <Text>Power Bank for iPhone</Text>
              </Box>
            </Box>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Price</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Power Bank Under 1000</Text>
                <Text>Power Bank Under 1500</Text>
                <Text>Power Bank Under 2000</Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>Chargers</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Features</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>Wireless Charger</Text>
                <Text>Type C Charger</Text>
                <Text>Fast Charger</Text>
                <Text>USB Charger</Text>
                <Text>Micro USB Charger</Text>
                <Text>Type C Adopter</Text>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Heading fontSize={"17px"}>Cable</Heading>
            <Box>
              <Text fontSize={"14px"} mb={1}>
                <b>Shop by Features</b>
              </Text>
              <Box fontSize={"13px"} color={"gray"}>
                <Text>C Type Cable</Text>
                <Text>Micre USB Cable</Text>
                <Text>Smart Watch Charging Cable</Text>
                <Text>USB C to C Cable</Text>
                <Text>C Type to Micro USB</Text>
                <Text>Lightning Cable</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
