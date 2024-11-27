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
 
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProduct, EditProduct, getAllProducts, getSingleProducts } from "@/app/API/response";
import { deleteProduct, getProductStart, getProductSuccess, updateProducts } from "@/app/Redux/Slices/allProducts";
import { errorNotify,successNotify } from "../Toast";
import { DefaultPagination } from "@/app/(dashboard)/products/Paginition";
import DeleteProductModal from "../ConfirmationModal/confirmationModal";
import { EditProductModal } from "../ConfirmationModal/EditModal";
 
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
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [DeleteModal, setDeleteModal] = useState(false);
  const [editModal, seteditModal] = useState(false);
  const [singleProduct, setSingleProduct] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const nextPage =()=>{
    setSkip((prevSkip) => prevSkip + limit);
  }
  const previousPage =()=>{
    setSkip((prevSkip) => Math.max(prevSkip - limit, 0)); 
  }
  // console.log("redux allProducts",allProducts)
  const getAllProduct = async() => {
    const route = `/product?limit=${limit}&skip=${skip}`;  
    try {
        dispatch(getProductStart())
        const response = await getAllProducts(route)
        // console.log("response--->>>>", response)
        dispatch(getProductSuccess(response.data))
      } catch (error) {
        errorNotify(error ||response.message)
      }
  }

  //get all product with limit
  useEffect(()=>{
    getAllProduct()
  },[limit,skip])

  useEffect(()=>{
    getAllProduct()
  },[])

// open  delete  product modal
const handleOpenDelModal = (id) => {
  setSelectedId(id)
  setDeleteModal(true);
};
// close delete modal 
const closeDelModal = () =>{
  setDeleteModal(false)
  setSelectedId(null);
}
//   delete  product Function
const deleteProductFunc = async(id) => {
  const response = await DeleteProduct(`/product/${id}`)
  // console.log(response)
  dispatch(deleteProduct(id))
  successNotify("Product Delete Successfully")
  closeDelModal()
}
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Open  edit product modal
  const handleOpenModal = (productId) => {
    setSelectedProduct(productId); 
    GetSingleProduct(productId)
    seteditModal(true);          
  };

// close  edit product modal
  const handleCloseModal = () => {
    seteditModal(false);         
    setSelectedProduct(null);  
    setSingleProduct(null)  
  };
// get single product 
const GetSingleProduct = async(id) =>{
  const response = await getSingleProducts(`/product/get/${id}`)
  // console.log("response",response)
  setSingleProduct(response.data)
}
const handleUpdateProduct = async (updatedData) => {
  // console.log("updatedData",updatedData)
  // console.log(`/product/${singleProduct?._id}`)
  try {
    const response = await EditProduct(`/product/${singleProduct?._id}`, updatedData);
    console.log("API Response:", response);

    dispatch(updateProducts(response.data)); // Update the product in Redux
    setSingleProduct(response.data); // Update local state
    if (response) {
      errorNotify("Product updated successfully!");
    }
  } catch (error) {
    console.error("Error updating product:", error.message);
    // errorNotify("Failed to update the product!");
  }
};
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
            All ProductList
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
            { isLoader ?
            Array(10)
            .fill(0)
            .map((_, index) => (
              <tr key={index}>
                {TABLE_HEAD.map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="p-4 border-b border-blue-gray-50 animate-pulse"
                  >
                    <div className="h-4 bg-blue-gray-100 rounded w-full"></div>
                  </td>
                ))}
              </tr>
            ))
            // <div className='w-full flex justify-center flex-col items-center pl-32 md:pl-80'><span><Loader/></span></div>
             :
              allProducts.length < 1 ? <div className="flex justify-center items-center flex-col  min-h-72 md:pl-60 max-w-xl text-4xl ">Currently, there are no products available. Stay tuned—exciting new items are coming soon!</div> :
            allProducts.map(
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
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-fit p-1"
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
                          <HiOutlinePencilAlt className="h-4 w-4" onClick={()=>handleOpenModal(item._id)} />
                          
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete Product">
                        <IconButton variant="text" onClick={()=>handleOpenDelModal(item._id)}>
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
      {/* delete modal  */}
      <DeleteProductModal openModal={DeleteModal}   onSubmit={() => deleteProductFunc(selectedId)} onClose={closeDelModal}/>
      {/* Edit modal  */}
      <EditProductModal openModal={editModal}  data={singleProduct}  submitHua={handleUpdateProduct} onClose={handleCloseModal}/>
      
      <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4">
      <DefaultPagination nextPage={nextPage} previousPage={previousPage}/>
        
      </CardFooter>
    </Card>
  );
}