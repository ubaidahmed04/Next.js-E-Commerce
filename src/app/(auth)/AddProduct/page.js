"use client"
import React, { useRef, useState } from "react";
// @components
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import FieldInput from "./Field";
import upload from '@/app/public/Images/upload.png'
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import Link from "next/link";



export function CryptoLogin() {
  const file = useRef();
  // console.log("file", file.current.value)
  const initialValues = {
    productname: "",
    description: "",
    brand: "",
    price: "",
    category: "",
    quantity: "",
  };
  const validationSchema = Yup.object({
    productname: Yup.string()
      .required("Product name is required")
      .min(3, "Product name must be at least 3 characters"),
    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),
    brand: Yup.string()
      .required("Brand is required")
      .min(2, "Brand must be at least 2 characters"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number")
      .min(1, "Price must be at least 1"),
    category: Yup.string()
      .required("Category is required"),
    quantity: Yup.number()
      .required("Quantity is required")
      .positive("Quantity must be a positive number")
      .integer("Quantity must be a whole number")
      .min(1, "Quantity must be at least 1"),
  });
  const handleSubmit = (values, { resetForm }) => {
    const data = new FormData()
    data.append("productname",values.productname)
    data.append("description",values.description)
    data.append("brand",values.brand)
    data.append("price",values.price)
    data.append("category",values.category)
    data.append("quantity",values.quantity)
    // data.append("resume",file.current.files[0])
    console.log(values)
    setFileName("")
    resetForm()
    if (file.current) {
      file.current.value = ""; 
    }
  }
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >

          <Form
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
                      {!fileName ? (
                        <>
                          <span className="block text-gray-500 font-semibold">Drag &amp; drop</span>
                          <span className="block text-gray-400 font-normal mt-1">or click to upload</span>
                        </>
                      ) : (
                        <span className="block text-gray-500 font-semibold">{fileName}</span>
                      )}
                    </div>

                    <input
                      name="file"
                      
                      className="h-full w-full opacity-0 cursor-pointer"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <span>

              <FieldInput type="text" name='productname' placeholder="Enter Your Product Name"  />
              <ErrorMessage name="productname" component="div" className="text-red-500 text-sm mt-1" />
            </span>

            <span>
              <FieldInput type="text" name='description' placeholder="Enter Description" label="Description" />
              <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
            </span>

            <span className="grid grid-cols-1 md:grid-cols-2 gap-2">

              <span>
              <FieldInput type="text" name='brand' placeholder="Enter Your Brand Name" label="Brand" />
              <ErrorMessage name="brand" component="div" className="text-red-500 text-sm mt-1" />
              </span>

              <span>
              <FieldInput type="number" name='price' placeholder="Enter Your Product Price" label="Price" />
              <ErrorMessage name="price" component="div" className="text-red-500 text-sm mt-1" />
              </span>

              <span>
              <FieldInput type="text" name='category' placeholder="Category" label="Category" />
              <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
              </span>

              <span>
              <FieldInput type="number" name='quantity' placeholder="Product Quantity" label="Quantity" />
              <ErrorMessage name="quantity" component="div" className="text-red-500 text-sm mt-1" />
              </span>
            </span>

            <span className="grid grid-cols-2 gap-2 py-4 ">
              <Link href={'/'}>
              <Button variant="outlined" className="flex h-12 border-blue-gray-200 items-center justify-center gap-" >
                Cancel
              </Button>
              </Link>
              <Button
                type="submit"
                size="lg" color="gray"
              >
                Add
              </Button>
            </span>
          </Form>
        </Formik>

      </CardBody>
    </Card>
  );
}

export default CryptoLogin;