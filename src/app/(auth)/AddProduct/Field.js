import { Input, Typography } from '@material-tailwind/react'
import React from 'react'

const Field = ({label, type, placeholder, id }) => {
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
            <Input
              id={id}
              color="gray"
              size="lg"
              type={type}
              name="email"
              placeholder={placeholder}
              className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
  )
}

export default Field