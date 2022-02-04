import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import { Fragment, useCallback, useEffect, useState } from "react";
import { getFilterValues, filterData } from "src/utils/filterData";
import Image from "next/image";
import { fetchApi } from "src/utils/fetchApi";

export default function SearchFilter() {
  const [filters] = useState(filterData);
  const [searchTerm, setSearchTerm] = useState("");
  const [locations, setLocation] = useState([]);
  const [showLocation, setShowLocation] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchProperties = (val: any) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(val);

    values.forEach((item) => {
      if (item.value && val?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query });
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    const data = await fetchApi(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auto-complete?query=${searchTerm}&hitsPerPage=9`
    );
    setLoading(false);
    return setLocation(data?.hits);
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm !== "") {
      fetchData();
    }
    return;
  }, [fetchData, searchTerm]);

  return (
    <Flex bg={"gray.100"} p={4} justify={"center"} wrap={"wrap"}>
      {filters.map((filter, id) => (
        <Fragment key={id}>
          <Box>
            <Select
              placeholder={filter.placeholder}
              w={"fit-content"}
              p={2}
              cursor={"pointer"}
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
            >
              {filter?.items?.map((item, id) => (
                <Fragment key={id}>
                  <option value={item.value}>{item.name}</option>
                </Fragment>
              ))}
            </Select>
          </Box>
        </Fragment>
      ))}
      <Flex flexDir={"column"}>
        <Button
          onClick={() => setShowLocation(!showLocation)}
          border={"1px"}
          borderColor={"gray.200"}
          mt={2}
        >
          Search Location
        </Button>
        {showLocation && (
          <Flex flexDir={"column"} position={"relative"} pt={2}>
            <Input
              placeholder="Type Here"
              value={searchTerm}
              w="300px"
              focusBorderColor="gray.300"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm !== "" && (
              <Icon
                as={MdCancel}
                position="absolute"
                cursor={"pointer"}
                right={5}
                top={5}
                zIndex={2}
                onClick={() => setSearchTerm("")}
              />
            )}
            {loading && <Spinner m={"auto"} mt="3" />}
            {showLocation && (
              <Box h={"300px"} overflow="auto">
                {locations?.map((location: any) => (
                  <Box
                    key={location.id}
                    onClick={() => {
                      searchProperties({
                        locationExternalIDs: location.externalID,
                      });
                      setShowLocation(false);
                      setSearchTerm(location.name);
                    }}
                  >
                    <Text
                      cursor={"pointer"}
                      bg="gray.200"
                      p={2}
                      borderBottom="1px"
                      borderColor={"gray.100"}
                    >
                      {location.name}
                    </Text>
                  </Box>
                ))}
                {!loading && !locations?.length && (
                  <Flex
                    justify={"center"}
                    alignItems="center"
                    flexDir={"column"}
                    my={5}
                  >
                    <Image
                      width={127}
                      height={129}
                      src={"/img/noresult.svg"}
                      alt="noresult"
                    />
                    <Text fontSize={"xl"} mt={3}>
                      Waiting to search!
                    </Text>
                  </Flex>
                )}
              </Box>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
