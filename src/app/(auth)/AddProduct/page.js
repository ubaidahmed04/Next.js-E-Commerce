"use client"
import React from "react";
// @components
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Field from "./Field";
import upload from '@/app/public/Images/upload.png'
import Image from "next/image";
// @icons

export function CryptoLogin() {
  return (
    <Card
      shadow={false}
      className="md:px-24 md:py-8 py-4 border border-gray-300"
    >
      <CardHeader shadow={false} floated={false} className="text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:text-4xl"
        >
          Add Product
        </Typography>
       
      </CardHeader>
      <CardBody>
        <form
          action="#"
          className="flex flex-col gap-4 "
        >

          <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
            <div className="md:flex">
              <div className="w-full p-3">
                <div
                  className="relative h-48 rounded-lg border-2 border-blue-gray-400 bg-gray-50 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                  <div className="absolute flex flex-col items-center">
                    <Image
                      height={70}
                      width={70}
                      alt="File Icon"
                      className="mb-3"
                      src={upload}
                    />
                    <span className="block text-gray-500 font-semibold"
                    >Drag &amp; drop</span>
                    <span className="block text-gray-400 font-normal mt-1">or click to upload</span>

                  </div>

                  <input
                    name=""
                    className="h-full w-full opacity-0 cursor-pointer"
                    type="file"
                  />
                </div>
              </div>
            </div>
          </div>

          <Field type="text" placeholder="Enter Your Product Name" label="Product Name" />
          <Field type="text" placeholder="Enter Your Brand Name" label="Brand" />
          <span className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Field type="text" placeholder="Enter Description" label="Description" />
            <Field type="text" placeholder="Enter Your Product Name" label="Brand" />
            <Field type="text" placeholder="Category" label="Category" />
            <Field type="number" placeholder="Product Quantity" label="Quantity" />
          </span>



          <span className="grid grid-cols-2 gap-2 py-4 ">

            <Button variant="outlined" className="flex h-12 border-blue-gray-200 items-center justify-center gap-" >
              Cancel
            </Button>
            <Button

              size="lg" color="gray"
            >
              Add
            </Button>
          </span>


        </form>
      </CardBody>
    </Card>
  );
}

export default CryptoLogin;