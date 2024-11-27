"use client"
import React, { useEffect, useState } from "react";
import {
  Input,
  Option,
  Select,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
export function EditProductModal({openModal,onClose,submitHua, data}) {
    const [formData, setFormData] = useState({
        productname: "",
        description: "",
        brand: "",
        price: "",
        category: "",
        quantity: "",
      });
      // console.log("formData",formData)
    useEffect(()=>{
        setFormData({
         productname: data?.productname || "",
         description: data?.description || "",
         brand: data?.brand || "",
         price: data?.price || "",
         category: data?.category || "",
         quantity: data?.quantity || "",
        
        })
    },[data]);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      submitHua(formData);
      // console.log("Form data: -->>>", formData);
      onClose()
    };
     
      const handleCategoryChange = (value) => {
        setFormData((prevData) => ({
          ...prevData,
          category: value,
        }));
      };
  return (
    <>
    
      <Dialog size="sm" open={openModal} handler={submitHua} className="p-2 overflow-y-auto relative max-h-[600px]  ">
        <form onSubmit={handleSubmit}>
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Edit Product
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
          Edit product details to ensure they remain accurate and consistent.
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={onClose}
          >
            <RxCross2 className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-2 pb-3">
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-2 text-left font-medium"
        >
          Product Name
        </Typography>
        <Input
          color="gray"
          size="lg"
          placeholder="e.g. White Shoes"
          name="productname"
          value={formData?.productname}
          onChange={handleInputChange}
          className="placeholder:opacity-100 focus:!border-t-gray-900"
          containerProps={{
            className: "!min-w-full",
          }}
          
        />
      </div>
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-2 text-left font-medium"
        >
          Category
        </Typography>
        <Select
          className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
          placeholder="Select Category"
          value={formData?.category}
          onChange={(value) => handleCategoryChange(value)}
          labelProps={{
            className: "hidden",
          }}
        >
          <Option  value="airbuds">Airbuds</Option>
          <Option  value="cloths">Cloths</Option>
          <Option  value="glasses">Glasses</Option>
          <Option  value="homeAccessories">Home Accessories</Option>
          <Option  value="perfumes">Perfumes</Option>
          <Option  value="heads">Heads</Option>
          <Option  value="watch">Watch</Option>
          <Option  value="jackets">Jackets</Option>
        </Select>
      </div>
      <div className="flex gap-4">
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 text-left font-medium"
          >
            Brand
          </Typography>
          <Input
            color="gray"
            size="lg"
            placeholder="e.g. Nike"
            name="brand"
            value={formData?.brand}
            onChange={handleInputChange}
            className="placeholder:opacity-100 focus:!border-t-gray-900"
            containerProps={{
              className: "!min-w-full",
            }}
            
          />
        </div>
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 text-left font-medium"
          >
            Price
          </Typography>
          <Input
            color="gray"
            size="lg"
            placeholder="e.g. $50"
            name="price"
            value={formData?.price}
            onChange={handleInputChange}
            className="placeholder:opacity-100 focus:!border-t-gray-900"
            containerProps={{
              className: "!min-w-full",
            }}
            
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 text-left font-medium"
          >
            Quantity
          </Typography>
          <Input
            color="gray"
            size="lg"
            placeholder="e.g. 10"
            name="quantity"
            value={formData?.quantity}
            onChange={handleInputChange}
            className="placeholder:opacity-100 focus:!border-t-gray-900"
            containerProps={{
              className: "!min-w-full",
            }}
            
          />
        </div>
      </div>
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-2 text-left font-medium"
        >
          Description (Optional)
        </Typography>
        <Textarea
          rows={7}
          placeholder="e.g. This is a white shoe with a comfortable sole."
          name="description"
          value={formData?.description}
          onChange={handleInputChange}
          className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
          labelProps={{
            className: "hidden",
          }}
        />
      </div>
          <Button className="ml-auto flex justify-end bg-secondary text-white" type="submit">
            Add Product
          </Button>

    </DialogBody>
        </form>
      </Dialog>
    </>
  );
}