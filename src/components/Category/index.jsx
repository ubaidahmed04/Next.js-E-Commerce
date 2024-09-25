"use client"
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import { HiArrowSmRight,HiArrowSmLeft } from "react-icons/hi";
 
export function Category({productName,url}) {
  return (
    <>
    
    <Card className="mt-6 w-24 shadow-none border-2">
      <CardBody>
      <Image
            src={url}
            layout="responsive"
            width={50}
            height={50}
            objectFit="contain"
            className="w-full h-full"
            alt="image 1"
            loading="lazy"
          />
        <Typography variant="p" color="blue-gray" className="mb-2 text-sm text-center">
         {productName}
        </Typography>
        
      </CardBody>
     
    </Card>
    </>

  );
}