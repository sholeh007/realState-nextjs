import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

type propType = {
  children: ReactNode;
};

export default function Layout({ children }: propType) {
  return (
    <Box maxW={"100vw"}>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxW={{ base: "100vw", md: "1280px" }} m="auto">
        <Box as="header">
          <Navbar />
        </Box>
        <Box as="main">{children}</Box>
        <Box as="footer">
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
