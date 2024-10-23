import { Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";

const InputFields = ({label, type, placeholder, name }) => {
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