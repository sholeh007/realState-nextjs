import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";

type propType = {
  children: ReactNode;
};

export default function Layout({ children }: propType) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxW={"1280px"} m="auto">
        <header>Navbar</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </Box>
    </>
  );
}
