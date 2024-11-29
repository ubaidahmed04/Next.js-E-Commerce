import { Input, Typography } from '@material-tailwind/react'
import React  from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSelector } from 'react-redux';

const InputFields = ({label, type, placeholder, name ,}) => {
  const { getCategory } = useSelector((state) => state.category);

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
        <option  >Select a category</option>
        {
          getCategory.length == 0 ? <option>No Category Avalaible</option> :
          getCategory?.map((opt ,idx)=>(
            <Option className="" key={idx} value={`${opt?._id.toString()}`} >{opt?.categoryName|| "No category Avalaible"}</Option>
          ))
        }  
          
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
              
            />

          </div>
  )
}

export default InputFields