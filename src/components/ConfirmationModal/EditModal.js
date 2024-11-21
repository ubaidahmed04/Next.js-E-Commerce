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
export function EditProduct({openModal,onClose,onSubmit, data}) {
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
      onSubmit(formData);
      console.log("Form data: -->>>", formData);
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
    
      <Dialog size="sm" open={openModal} handler={onSubmit} className="p-4">
        <form onSubmit={handleSubmit}>
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Manage Item
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Keep your records up-to-date and organized.
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
        <DialogBody className="space-y-4 pb-6">
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
          labelProps={{
            className: "hidden",
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
          <Option value="Clothing">Clothing</Option>
          <Option value="Fashion">Fashion</Option>
          <Option value="Watches">Watches</Option>
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
    </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={onSubmit}>
            Add Product
          </Button>
        </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}