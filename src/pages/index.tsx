import type { NextPage } from "next";
import { Flex, Box } from "@chakra-ui/react";
import Banner from "@/components/molecules/Banner";

const Home: NextPage = () => {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title="Rental Homes for"
        title2="Everyone"
        desc="Explorer Apartments, Villas, Homes"
        desc2="and more"
        btnText="Exploring Renting"
        link="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap={"wrap"}></Flex>
      <Banner
        purpose="BUY A HOME"
        title="Find, Buy & Own Your"
        title2="Dream Home"
        desc="Explorer Apartments, Villas, Homes"
        desc2="and more"
        btnText="Exploring Buying"
        link="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
    </Box>
  );
};

export default Home;
