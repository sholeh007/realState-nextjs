import Image from "next/image";
import Link from "next/link";
import millify from "millify";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

type propType = {
  coverPhoto: any;
  price: number;
  rentFrequency: null | number | string;
  rooms: number;
  title: string;
  baths: number;
  area: number;
  agency: any;
  isVerified: boolean;
  externalID: string;
};

export default function Property({ property }: any) {
  const {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  }: propType = property;

  return (
    <Link href={`/property/${externalID}`} passHref>
      <Box
        borderRadius={"md"}
        mx={"auto"}
        mt={"5"}
        _hover={{
          shadow: "md",
          transition: "0.3s",
          transform: "scale(1.1)",
        }}
      >
        <Flex flexWrap={"wrap"} w={"420px"} p={5} cursor={"pointer"}>
          <Box>
            <Image
              src={coverPhoto ? coverPhoto.url : "/img/house.jpg"}
              width={400}
              height={260}
              alt="house"
              blurDataURL={coverPhoto ? coverPhoto.url : "/img/house.jpg"}
              placeholder="blur"
            />
          </Box>
          <Box w={"full"}>
            <Flex
              paddingTop={2}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Flex alignItems={"center"}>
                <Box paddingRight={3} color={"green.400"}>
                  {isVerified && <GoVerified />}
                </Box>
                <Text fontWeight={"bold"} fontSize={"lg"}>
                  AED {millify(price)}
                  {rentFrequency && `/${rentFrequency}`}
                </Text>
              </Flex>
              <Box>
                <Avatar size={"sm"} src={agency?.logo?.url} />
              </Box>
            </Flex>
            <Flex
              alignItems={"center"}
              p={1}
              justifyContent={"space-between"}
              w={"250px"}
              color={"blue.400"}
            >
              {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
              <BsGridFill />
            </Flex>
            <Text fontSize={"lg"}>
              {title.length > 30 ? `${title.substring(0, 30)}...` : title}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
}
