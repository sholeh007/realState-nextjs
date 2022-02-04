import { Flex, Box, Spacer, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import type { GetServerSideProps, NextPage } from "next";
import { fetchApi } from "src/utils/fetchApi";
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
      {photos && <ImageScrollBar />}
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
