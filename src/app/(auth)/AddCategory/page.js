"use client"
import React, { useEffect, useRef, useState } from "react";
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
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { AddCategory, AddProduct } from "@/app/API/response";
import { errorNotify, successNotify } from "@/components/Toast";
import { ToastContainer } from "react-toastify";
import { motion } from 'framer-motion'


export function CryptoLogin() {
  const { isUser } = useSelector((state) => state.currUser)
  const router = useRouter()
  const initialValues = {
    categoryName: "",
  };
  const validationSchema = Yup.object({
    categoryName: Yup.string()
      .required("category name is required")
      .min(3, "Product name must be at least 3 characters"),
   
  });
  const handleSubmit = async (values, { resetForm }) => {
    const route = '/category/add'  
    console.log(values)
    try {
      const response = await AddCategory(route, values)
      console.log("response--->>>>", response)
      successNotify(response.message)
      resetForm()
      
    } catch (error) {
      errorNotify(error ||response.message)
    }

  }
 
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0 }}
    >

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
          Add Category
        </Typography>

      </CardHeader>
      <CardBody>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >

          <Form
            className="flex flex-col gap-4 "
          >
            <span>
              <FieldInput type="text" name='categoryName' placeholder="Enter Your Category" />
              <ErrorMessage name="categoryName" component="div" className="text-red-500 text-sm mt-1" />
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
      <ToastContainer/>
    </Card>
    </motion.div>

  );
}

export default CryptoLogin;