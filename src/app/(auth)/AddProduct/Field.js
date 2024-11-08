import { Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";

const InputFields = ({label, type, placeholder, name }) => {
  if (type === 'select') {
    return (
      <>
      <label >
      <Typography
        variant="small"
        color="blue-gray"
        className="block font-medium mb-2"
      >
        {label}
      </Typography>
    </label>
      <Field
        name={name}
        type={type}
        as="select"
        className="!w-full !px-3 !py-3 !bg-white !border border-blue-gray-300 rounded-md shadow-sm focus:!outline-none focus:!ring-2  !transition duration-200 ease-in-out !text-gray-700"
      >
          <option  value="">Select a category</option>
          <option  value="airbuds">Airbuds</option>
          <option  value="cloths">Cloths</option>
          <option  value="glasses">Glasses</option>
          <option  value="homeAccessories">Home Accessories</option>
          <option  value="perfumes">Perfumes</option>
          <option  value="heads">Heads</option>
      </Field>
      </> 
    );
  }
  return (
    <div>
            <label >
              <Typography
                variant="small"
                color="blue-gray"
                className="block font-medium mb-2"
              >
                {label}
              </Typography>
            </label>
            <Field
            as={Input}
              color="gray"
              size="lg"
              type={type}
              name={name}
              placeholder={placeholder}
              className="!w-full placeholder:!opacity-100 focus:!border-t-primary  !border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />

          </div>
  )
}

export default InputFields