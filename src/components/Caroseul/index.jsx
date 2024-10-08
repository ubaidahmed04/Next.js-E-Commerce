"use client"
import { Carousel } from "@material-tailwind/react";
import img1 from "@/app/public/Images/carousel2.jpg";
import img2 from "@/app/public/Images/carousel1.jpg";
import img3 from "@/app/public/Images/carousel3.jpg";
import Image from "next/image";
import { carosel1 } from "@/app/public/const/base64";
export function CarouselDefault() {
  return (
    <Carousel transition={{ duration: 1 }} loop={true} autoplay={true} className="rounded-xl h-1/2 bg-[#C9C9C9]">
      <Image
        src={img1}
        height={300}
        width={500}
        alt="image 1"
        blurDataURL={carosel1}
        className="h-64 md:h-80 lg:h-96  w-full "
      />
      <Image
        src={img2}
        height={300}
        width={500}
        alt="image 2"
        className="h-64 md:h-80 lg:h-96  w-full "
      />
      <Image
        src={img3}
        alt="image 3"
        height={300}
        width={500}
        className="h-64 md:h-80 lg:h-96  w-full object-fit"
      />
    </Carousel>
  );
}