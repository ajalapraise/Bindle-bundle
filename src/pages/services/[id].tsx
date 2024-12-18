"use client";
import React, { useState, useEffect } from "react";
import {
  MovingTypeDetailProps,
  movingTypeDetails,
} from "../../data/MovingType";
import { Text, Box, Button, Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";

const ServicesDetails = () => {
  const router = useRouter();
  const [data, setData] = useState<MovingTypeDetailProps | null>(null);
  const [moveType] = useQueryState("type");

  const handleTriggerWhatToExpect = () => {
    if (window.location.pathname.includes("/services")) {
      router.push(`/what-to-expect`);
    } else {
      return;
    }
  };

  useEffect(() => {
    const matchingType = movingTypeDetails.find(
      (detail: MovingTypeDetailProps) => detail.type === moveType
    );

    setData(matchingType || null);
  }, [moveType]);

  return (
    <Box
      width={{ base: "100%", md: "1164px" }}
      height={{ base: "fit", md: "578px" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      marginX={"auto"}
      flexDirection={"column"}
      paddingX={{ base: "24px", md: "0px" }}
      marginTop={"20px"}
    >
      {data ? (
        <Box
          width={"100%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"start"}
          gap={"26px"}
          justifyContent={"space-between"}
        >
          <Text
            fontSize={{ base: "36px", md: "56px" }}
            fontWeight={"500"}
            textAlign={"left"}
            lineHeight={{ base: "41px", md: "54px" }}
          >
            {data.name}
          </Text>
          <Box
            width={"100%"}
            height={"100%"}
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={"space-between"}
          >
            <Box
              width={{ base: "100%", md: "613px" }}
              height={{ base: "fit", md: "559px" }}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"start"}
              gap={"26px"}
            >
              <Box
                width={"full"}
                height={{ base: "268px", md: "401px" }}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"15px"}
                boxShadow={"md"}
                borderWidth={"1px"}
                borderColor={"C38F5E33"}
              >
                <Image
                  src={data.image}
                  alt="a profile image of a user"
                  objectPosition="center"
                  objectFit={"cover"}
                  width={"full"}
                  height={"full"}
                  borderRadius={"15px"}
                />
              </Box>
              <Box
                width={{ base: "100%", md: "474px" }}
                display={"flex"}
                flexDirection={{ base: "column", md: "row" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                gapY={"14px"}
              >
                <Button
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={{ base: "full", md: "224px" }}
                  height={"52px"}
                  backgroundColor={"#051937"}
                  color={"#FFFFFF"}
                  paddingX={"26px"}
                  paddingY={"13px"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                  borderRadius="33px"
                >
                  Get moving
                </Button>
                <Button
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={{ base: "full", md: "224px" }}
                  height={"52px"}
                  backgroundColor={"#75D130"}
                  color={"#FFFFFF"}
                  paddingX={"26px"}
                  paddingY={"13px"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                  borderRadius="33px"
                  onClick={handleTriggerWhatToExpect}
                >
                  What to expect
                </Button>
              </Box>
            </Box>

            <Box
              width={{ base: "100%", md: "499px" }}
              height={{ base: "fit", md: "496px" }}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"start"}
              gapY={{ base: "26px", md: "46px" }}
              overflow={{ base: "hidden", md: "auto" }}
              marginTop={{ base: "20px", md: "0px" }}
            >
              {data.description.map((item, index) => (
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  key={index}
                  width={"100%"}
                  height={{ base: "", md: "150px" }}
                  alignItems={"start"}
                  justifyContent={"space-between"}
                  gapX={{ base: "12px", md: "0" }}
                >
                  <Box
                    height={"100%"}
                    display={"flex"}
                    alignItems={"start"}
                    justifyContent={"start"}
                  >
                    <Text
                      fontSize={{ base: "50px", md: "78px" }}
                      fontWeight={"500"}
                      WebkitTextStrokeColor={"#000000"}
                      WebkitTextFillColor={"#FFFFFF"}
                      WebkitTextStrokeWidth={"1px"}
                      marginTop={{ base: "-8px", md: "-13px" }}
                      width={{ base: "41px", md: "82px" }}
                      textAlign={"center"}
                    >
                      {index + 1}
                    </Text>
                  </Box>
                  <Box
                    width={{ base: "100%", md: "417px" }}
                    height={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <Text
                      fontSize={{ base: "20px", md: "28px" }}
                      fontWeight={"500"}
                      textAlign={"left"}
                      color={"#332F2F"}
                    >
                      {item.title}
                    </Text>
                    <Text
                      fontSize={{ base: "14px", md: "22px" }}
                      fontWeight={"400"}
                      textAlign={"left"}
                      lineHeight={{ base: "17.22px", md: "27.06px" }}
                      color={"#595959"}
                      paddingRight={{ base: "", md: "4px" }}
                    >
                      {item.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default ServicesDetails;