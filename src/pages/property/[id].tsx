import { Flex, Box, Text, Avatar, Stack } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import type { GetServerSideProps, NextPage } from "next";
import { fetchApi } from "../../utils/fetchApi";
import ImageScrollBar from "@/components/molecules/ImageScrollBar";
import millify from "millify";

const PropertyDetails: NextPage = ({ data }: any) => {
  const {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  } = data;

  return (
    <Box maxW={"1000px"} m="auto" p={"4"}>
      {photos && <ImageScrollBar data={photos} />}
      <Box w="full" p={6}>
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
        <Box my={2}>
          <Text fontSize={"lg"} fontWeight="bold">
            {title}
          </Text>
          <Text lineHeight={2} color="gray.600">
            {description}
          </Text>
        </Box>
        <Flex
          wrap={"wrap"}
          textTransform="uppercase"
          mt={"10"}
          justify={"space-between"}
        >
          <Stack spacing={"10"}>
            <Flex
              justify={"space-between"}
              w="400px"
              borderBottom={"1px"}
              borderColor="gray.100"
            >
              <Text>Type</Text>
              <Text fontWeight={"bold"}>{type}</Text>
            </Flex>
            <Flex
              justify={"space-between"}
              w="400px"
              borderBottom={"1px"}
              borderColor="gray.100"
            >
              <Text>Purpose</Text>
              <Text fontWeight={"bold"}>{purpose}</Text>
            </Flex>
            {furnishingStatus && (
              <Flex
                justify={"space-between"}
                w="400px"
                borderBottom={"1px"}
                borderColor="gray.100"
              >
                <Text>Furnishing Status</Text>
                <Text fontWeight={"bold"}>{furnishingStatus}</Text>
              </Flex>
            )}
          </Stack>
        </Flex>
        <Box>
          {amenities.length > 0 && (
            <Text fontSize={"2xl"} fontWeight="black" mt="5">
              Amenities
            </Text>
          )}
          <Flex wrap={"wrap"}>
            {amenities.map((item: any) =>
              item.amenities.map((amenity: any) => (
                <Text
                  key={amenity.text}
                  fontWeight="bold"
                  color={"blue.400"}
                  fontSize="sm"
                  bg={"gray.200"}
                  p={2}
                  m="1"
                  borderRadius={"md"}
                >
                  {amenity.text}
                </Text>
              ))
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id }: any = params;

  const data = await fetchApi(
    `${process.env.BASE_URL}/properties/detail?externalID=${id}`
  );

  return {
    props: {
      data,
    },
  };
};
