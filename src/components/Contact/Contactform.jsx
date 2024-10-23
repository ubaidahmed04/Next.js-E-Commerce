"use client"
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Alert
} from "@material-tailwind/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
export function ContactForm() {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    phone: Yup.string()
      .required("Phone number is required"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters")
  });
// email sent function 
const sendEmail = (values) => {
  emailjs.send(
    'service_dttlny9',
    'template_akza2cj',
    {
      to_name: 'Shop Website',
      from_name: values.name, 
      message: values.message, 
      from_email: values.email, 
      reply_to: values.email,  
    },
    'xZzt_m_2tW7AHgdJu'
  ).then((result) => {
    console.log('Email sent successfully:', result.text);
    alert("Email Sent SuccessFully!")
    // notifySuccess()
  }).catch((error) => {
    console.log('Failed to send email:', error.text);
    // notifyError()
  });
};

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data", values);
    sendEmail(values)
    resetForm();
  };

  return (
    <Card className="p-6  max-w-lg  mx-auto bg-white shadow-lg rounded-lg">
      <Typography variant="h3" color="blue-gray" className="text-center mb-3 font-bold py-2">
        Contact Us
      </Typography>
      <Typography color="gray" className="text-center mb-4 lg:mb-8">
        Have any questions? We&apos;d love to hear from you. Please fill out the form below.
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-6">
            <div className="flex flex-col gap-6">
              <div>
                <Field 
                  as={Input} 
                  variant="outlined" 
                  label="Name" 
                  name="name"
                  placeholder="Your Name" 
                  className="rounded-lg shadow-sm"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Field 
                  as={Input} 
                  variant="outlined" 
                  type="email" 
                  label="Email" 
                  name="email"
                  placeholder="Your Email" 
                  className="rounded-lg shadow-sm"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Field 
                  as={Input} 
                  variant="outlined" 
                  label="Phone" 
                  name="phone"
                  placeholder="Your Phone" 
                  className="rounded-lg shadow-sm"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Field 
                  as={Textarea} 
                  label="Message" 
                  name="message"
                  className="rounded-lg shadow-sm"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <Button type="submit" className="bg-secondary text-white rounded-lg px-6 py-3">
                Send Message
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  );
}
