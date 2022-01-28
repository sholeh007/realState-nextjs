import type { NextPage } from "next";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

interface propTypes {
  imageUrl: string;
  purpose: string;
  title: string;
  title2: string;
  desc: string;
  desc2: string;
  link: string;
  btnText: string;
}

const Banner = ({
  imageUrl,
  purpose,
  title,
  title2,
  desc,
  desc2,
  link,
  btnText,
}: propTypes) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m={10}>
      <Image
        src={imageUrl}
        width={500}
        height={300}
        alt="banner"
        blurDataURL="base64"
        placeholder="blur"
      />
      <Box p={5}>
        <Text color={"gray.500"} fontSize={"sm"} fontWeight={"medium"}>
          {purpose}
        </Text>
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          {title}
          <br />
          {title2}
        </Text>
        <Text color={"gray.700"} paddingY={3} fontSize={"lg"}>
          {desc}
          <br />
          {desc2}
        </Text>
        <Button fontSize={"xl"} bg={"purple.600"} color={"white"}>
          <Link href={link}>{btnText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

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
