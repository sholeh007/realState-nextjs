import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsFilter } from "react-icons/bs";
import { Fragment, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { fetchApi } from "src/utils/fetchApi";
import SearchFilter from "@/components/molecules/SearchFilter";
import Property from "@/components/molecules/Property";

const Search: NextPage = ({ properties }: any) => {
  const [filter, setFilter] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        cursor={"pointer"}
        bg={"gray.100"}
        borderBottom={"1px"}
        borderColor={"gray.200"}
        p={2}
        fontWeight={"black"}
        fontSize={"lg"}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={() => setFilter((prevValue) => !prevValue)}
      >
        <Text>Search property by Filters</Text>
        <Icon pl={2} w={7} as={BsFilter} />
      </Flex>
      {filter && <SearchFilter />}
      <Text fontSize={"2xl"} p={4} fontWeight={"bold"}>
        Property {router.query.purpose || "for-rent"}
      </Text>
      <Flex wrap={"wrap"}>
        {properties?.map((property: any, id: any) => (
          <Fragment key={id}>
            <Property property={property} />
          </Fragment>
        ))}
      </Flex>
      {properties === "undefined" && (
        <Flex justify={"center"} align={"center"} direction={"column"} my={5}>
          <Image
            src={"/img/noresult.svg"}
            width={127}
            height={129}
            alt="no-result"
            placeholder="blur"
            blurDataURL="base64"
          />
          <Text fontSize={"2xl"} mt={3}>
            No Results Found
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${process.env.BASE_URL}/properties/list?hitsPerPage=9&locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
};
