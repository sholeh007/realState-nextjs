import type { NextPage } from "next";
import { Flex, Box } from "@chakra-ui/react";
import { fetchApi } from "src/utils/fetchApi";
import { Fragment, Key } from "react";
import Banner from "@/components/molecules/Banner";
import Property from "@/components/molecules/Property";

const Home: NextPage = ({ forSale, forRent }: any) => {
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
      <Flex flexWrap={"wrap"}>
        {forRent.map((property: any) => (
          <Fragment key={property.id}>
            <Property
              rooms={property.rooms}
              baths={property.baths}
              area={property.area}
              agency={property.agency}
              price={property.price}
              rentFrequency={property.rentFrequency}
              isVerified={property.isVerified}
              coverPhoto={property.coverPhoto}
              externalID={property.externalID}
              title={property.title}
            />
          </Fragment>
        ))}
      </Flex>
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
      <Flex flexWrap="wrap">
        {forSale.map((property: any) => (
          <Fragment key={property.id}>
            <Property
              rooms={property.rooms}
              baths={property.baths}
              area={property.area}
              agency={property.agency}
              price={property.price}
              rentFrequency={property.rentFrequency}
              isVerified={property.isVerified}
              coverPhoto={property.coverPhoto}
              externalID={property.externalID}
              title={property.title}
            />
          </Fragment>
        ))}
      </Flex>
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  const [forSale, forRent] = await Promise.all([
    fetchApi(
      `${process.env.BASE_URL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
    ),
    fetchApi(
      `${process.env.BASE_URL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
    ),
  ]);

  return {
    props: {
      forSale: forSale?.hits,
      forRent: forRent?.hits,
    },
  };
}
