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
        <option value="">Select a category</option>
          <option  value="laptop">laptop</option>
          <option  value="LCD">LCD</option>
          <option  value="games">Games</option>
          <option  value="accessories">Accessories</option>
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