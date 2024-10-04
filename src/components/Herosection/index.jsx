"use client"
import React from "react";
import Slider from "react-slick";
import img1 from '@/app/public/Images/carousel1.jpg'
import img2 from '@/app/public/Images/carousel2.jpg'
import img3 from '@/app/public/Images/carousel3.jpg'
import Image from "next/image";
export function Caroseul() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    waitForAnimate: false,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024, // For large screens
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768, // For tablets
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480, // For mobile screens
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  };
  return (
    <div className="slider-container  w-full h-auto  ">
      <Slider {...settings}>
        <div className="image-wrapper  w-full h-full overflow-hidden">
          <Image height={400} layout="responsive" width={800} src={img1}  objectFit="cover"
            className="w-full" alt="image 1" />
        </div>
        <div className="image-wrapper  w-full overflow-hidden">
          <Image height={400} layout="responsive" width={800} src={img2}  objectFit="cover"
            className="w-full" alt="image 1"/>
        </div>
        <div className="image-wrapper  w-full overflow-hidden">
          <Image height={400} layout="responsive" width={800} src={img3}  objectFit="cover"
            className="w-full" alt="image 1"/>
        </div>
        <div className="image-wrapper  w-full overflow-hidden">
          <Image height={400} layout="responsive" width={800} src={img1}  objectFit="cover"
            className="w-full" alt="image 1"/>
        </div>
      </Slider>
    </div>
  );
}

