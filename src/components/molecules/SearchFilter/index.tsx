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
import { Fragment, useState } from "react";
import { getFilterValues, filterData } from "src/utils/filterData";
import Image from "next/image";

export default function SearchFilter() {
  const [filters, setFilter] = useState(filterData);
  const router = useRouter();

  const searchProperties = (val: {}) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(val);

    values.forEach((item) => {
      query[item.name] = item.value;
    });

    router.push({ pathname: path, query });
  };

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
    </Flex>
  );
}
