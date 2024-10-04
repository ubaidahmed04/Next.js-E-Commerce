"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import img1 from "@/app/public/Images/carousel1.jpg";
import img2 from "@/app/public/Images/carousel2.jpg";
import Image from "next/image";
import { HiArrowSmRight,HiArrowSmLeft } from "react-icons/hi";

export function Varieties() {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full px-4 md:px-8 lg:px-12">
        <div className="flex justify-end mt-4">
        <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={previous}>
        <HiArrowSmLeft/>
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={next}>
        <HiArrowSmRight/>
        </button>
      </div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
          
        {/* <div className="image-wrapper w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <Image
            src={img1}
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
            className="w-full h-full"
            alt="image 1"
          />
        </div>
        <div className="image-wrapper w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <Image
            src={img2}
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
            className="w-full h-full"
            alt="image 2"
          />
        </div> */}
        <div className="image-wrapper w-full h-32  overflow-hidden">
          <Image
            src={img1}
            layout="responsive"
            width={200}
            height={200}
            objectFit="contain"
            className="w-full h-full"
            alt="image 1"
          />
        </div>
        <div className="image-wrapper w-full  overflow-hidden">
          <Image
            src={img2}
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
            className="w-full h-full"
            alt="image 2"
          />
        </div>
      </Slider>

    
    </div>
  );
}
