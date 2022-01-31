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

export default function Banner({
  imageUrl,
  purpose,
  title,
  title2,
  desc,
  desc2,
  link,
  btnText,
}: propTypes) {
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
}
