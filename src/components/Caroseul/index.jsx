"use client"
import { Carousel } from "@material-tailwind/react";
import img1 from "@/components/Images/caroseul.jpg";
import img2 from "@/components/Images/caroseul2.jpg";
import Image from "next/image";
export function CarouselDefault() {
  return (
    <Carousel transition={{ duration: 1 }} loop={true} autoplay={true} className="rounded-xl h-1/2 bg-[#C9C9C9]">
      <Image
        src={img1}
        height={300}
        width={500}
        alt="image 1"
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
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        height={300}
        width={500}
        className="h-64 md:h-80 lg:h-96  w-full object-fit"
      />
    </Carousel>
  );
}