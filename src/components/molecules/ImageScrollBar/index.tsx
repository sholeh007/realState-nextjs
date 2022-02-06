import Image from "next/image";
import Carousel from "nuka-carousel";
import { Box } from "@chakra-ui/react";

export default function ImageScrollBar({ data }: any) {
  return (
    <Box maxW={"910px"}>
      <Carousel enableKeyboardControls={true}>
        {data?.map((item: any) => (
          <Box key={item.id} itemID={item.id}>
            <Image
              placeholder="blur"
              blurDataURL={item.url}
              src={item.url}
              width={1000}
              height={500}
              alt="image"
              sizes="(max-width:500px) 100px,(max-width:1023px) 400px, 1000px"
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
