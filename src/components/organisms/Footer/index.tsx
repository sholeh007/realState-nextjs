import { Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      mt={"10"}
      textAlign={"center"}
      p={5}
      color={"gray.600"}
      borderTop={"1px"}
      borderColor={"gray.100"}
      mr={{ base: "-120", md: "0" }}
    >
      2022 Real-State, Inc.
    </Box>
  );
}
