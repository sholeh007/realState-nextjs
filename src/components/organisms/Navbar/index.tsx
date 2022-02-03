import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Flex,
  Box,
  Spacer,
  MenuItem,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

export default function Navbar() {
  const [isTablet] = useMediaQuery("(max-width:768px)");

  return (
    <Flex
      p={2}
      borderBottom={"1px"}
      borderColor={"gray.100"}
      mr={{ base: "-20", md: "0" }}
      alignItems={"center"}
    >
      <Box
        fontSize={"3xl"}
        paddingLeft={2}
        color={"blue.400"}
        fontWeight={"bold"}
      >
        <Link href={"/"} passHref>
          Real-State
        </Link>
      </Box>
      <Spacer />
      {isTablet ? (
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FcMenu />}
              variant="outline"
              color={"red.400"}
            />
            <MenuList>
              <Link href={"/"} passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
              </Link>
              <Link href={"/search"} passHref>
                <MenuItem icon={<BsSearch />}>Search</MenuItem>
              </Link>
              <Link href={"/search?purpose=for-sale"} passHref>
                <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
              </Link>
              <Link href={"/search?purpose=for-rent"} passHref>
                <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      ) : (
        // Dekstop
        <Box>
          <Flex>
            <Link href={"/"} passHref>
              <Text cursor={"pointer"}>Home</Text>
            </Link>
          </Flex>
        </Box>
      )}
    </Flex>
  );
}
