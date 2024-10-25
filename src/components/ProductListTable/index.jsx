"use client"
import { TbDownload } from "react-icons/tb";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogBody,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProduct, getAllProducts } from "@/app/API/response";
import { deleteProduct, getProductSuccess } from "@/app/Redux/Slices/allProducts";
import { errorNotify,successNotify } from "../Toast";
 
const TABLE_HEAD = ["Image", "Price", "Category", "Brand", "Quantity", "Action"];
 
const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Shoes",
    amount: "$2,500",
    category: "Laptop",
    brand: "Nike",
    quantity: "20",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "$5,000",
    category: "Laptop",
    brand: "Nike",
    quantity: "34",
    
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "$3,400",
    category: "Mobile",
    brand: "Nike",
    quantity: "54",
   
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "Google",
    amount: "$1,000",
    category: "Laptop",
    brand: "Nike",
    quantity: "23",
 
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    category: "Laptop",
    brand: "Nike",
    quantity: "12",
  
  },
];
 
export function ProductTable() {

  const dispatch = useDispatch()
  const {allProducts,isLoader} = useSelector((state)=> state.allproducts)
  console.log("redux allProducts",allProducts)
  const getAllProduct = async() => {
    const route = '/product'  
    try {
        const response = await getAllProducts(route)
        console.log("response--->>>>", response)
        dispatch(getProductSuccess(response.data))        
      } catch (error) {
        errorNotify(error ||response.message)
      }
  }
 // delete products 
 const deleteSingleProduct = async(id) =>{
  const response = await DeleteProduct(`/product/${id}`)
  console.log(response)
  dispatch(deleteProduct(id))
  successNotify("Product Delete Successfully")

}
  useEffect(()=>{
    getAllProduct()
  },[])


  const [openModal, setOpenModal] = useState(false); // To control modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleOpenModal = (product) => {
    setSelectedProduct(product); // Set selected product data
    setOpenModal(true);          // Open modal
  };

  const handleCloseModal = () => {
    setOpenModal(false);         // Close modal
    setSelectedProduct(null);    // Clear selected product data
  };

  const handleUpdateProduct = () => {
    // Logic to update the product using selectedProduct state
    // Close modal after update
    handleCloseModal();
  };
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
             ProductList
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
             Productlist all products are here
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<HiMagnifyingGlass className="h-5 w-5" />}
              />
            </div>
           
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allProducts.map(
              (item,index,) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={item?.file[0]}
                          alt={name}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {item?.productname}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item?.category}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={item?.brand}
                          color='amber'
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal capitalize"
                          >
                           {item?.quantity}
                          </Typography>
                          
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit Product">
                        <IconButton variant="text" >
                          <HiOutlinePencilAlt className="h-4 w-4" />
                          
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete Product">
                        <IconButton variant="text" onClick={()=>deleteSingleProduct(item._id)}>
                          <FaRegTrashAlt className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <Dialog open={openModal} handler={handleCloseModal}>
        <DialogHeader>Edit Product</DialogHeader>
        <DialogBody>
          {selectedProduct && (
            <div className="flex flex-col gap-4">
              <Input label="Name" value={selectedProduct.name} />
              <Input label="Price" value={selectedProduct.amount} />
              <Input label="Category" value={selectedProduct.category} />
              <Input label="Brand" value={selectedProduct.brand} />
              <Input label="Quantity" value={selectedProduct.quantity} />
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="gradient" color="blue" onClick={handleUpdateProduct}>
            Save
          </Button>
        </DialogFooter>
      </Dialog>
      <CardFooter className="flex items-center justify-center md:justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" className="hidden md:block" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined"  className="hidden md:block" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}