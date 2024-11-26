"use client"
import React, { useState } from "react";
import Product1 from "@/app/public/Images/product1.png";
import Product2 from "@/app/public/Images/product2.png";
import Product3 from "@/app/public/Images/product3.png";
import Product4 from "@/app/public/Images/product4.png";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Radio,
  ButtonGroup,
  List,
  ListItem,
  Avatar,
} from "@material-tailwind/react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import {  ShowCard } from "@/components";
import Image from "next/image";
function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export function ProductDetail({title, url, price, description ,allFile}) {
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle button click and set the active button
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };
 

  const [active, setActive] = React.useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index,img) =>{
    setActiveIndex(index)
    setActive(img)
  }

  return (
    <div>
      <div className="  flex flex-col lg:flex-row justify-around items-center gap-4 px-2 py-5">
        <div className=" ">
          <div className="flex h-full md:h-96 overflow-hidden justify-center">
            <img
              className="h-full w-full max-w-2xl rounded-lg object-fit "
              src={active == null ? url : active}
              loading="lazy"
              alt="product image"
              width={480} 
              height={480}
              layout="responsive"
            />
          </div>
          <div className="flex gap-3 w-full justify-center  py-2">
            {allFile?.map((img, index) => (
              <div key={index}>
                <img
                  onClick={() => handleClick(index,img)}
                  src={img}
                  loading="lazy"
                  className={activeIndex === index ?"border-2 border-black h-20 max-w-full w-32 cursor-pointer rounded-lg object-fit object-center":"h-20 max-w-full w-32 cursor-pointer rounded-lg object-fit object-center"}
                  alt="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <Card className="mt-6 w-96">
            <CardBody>
              <Typography variant="h4" color="blue-gray" className="mb-2 text-2xl myfontbold">
                {title}
              </Typography>
              <span className="flex">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                (120Review) | <span className="text-green myfont px-2">In Stock</span>
              </span>
              <span className="myfontbold text-xl md:text-2xl">
              Rs {price}
              </span>
              <Typography className="myfont">
             {description}
              </Typography>
              <Typography className="my-4 border-b-4 border-gray-500">

              </Typography>
              <span>
                <ButtonGroup className="gap-4 items-center">
                  <Typography className="">
                    size :
                  </Typography>
                  <Button
                    onClick={() => handleButtonClick(1)}
                    className={`${activeButton === 1 ? 'bg-secondary text-black' : 'bg-transparent text-gray-700'
                      }`}
                  >
                    sm
                  </Button>
                  <Button
                    onClick={() => handleButtonClick(2)}
                    className={`${activeButton === 2 ? 'bg-secondary text-black' : 'bg-transparent text-gray-700'
                      }`}
                  >
                    md
                  </Button>
                  <Button
                    onClick={() => handleButtonClick(3)}
                    className={`${activeButton === 3 ? 'bg-secondary text-black' : 'bg-transparent text-gray-700'
                      }`}
                  >
                    lg
                  </Button>

                </ButtonGroup>
              </span>
              <span className=" border-2 flex w-fit  gap-6 items-center my-4">
                <FaPlus className="bg-secondary w-8 h-8 text-white py-2 cursor-pointer" />
                <span>5</span>
                <FaMinus className="bg-secondary w-8 h-8 text-white py-2 cursor-pointer" />
              </span>
              <span></span>
              <Card className="w-full border-2 shadow-none">
                <List>
                  <ListItem>
                    <span>
                      <Avatar
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                        alt="avatar"
                        className="p-0.5"
                      />
                    </span>
                    <span className="myfont text-sm ">
                      Free Delivery <br /> <hr />
                      Enter your postal code for Delivery Availability
                    </span>
                  </ListItem>
                  <ListItem>
                    <span>
                      <Avatar
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                        alt="avatar"
                        className="p-0.5"
                      />
                    </span>
                    <span className="myfont text-sm">
                      Return Delivery <br /> <hr />
                      Free 30 Days Delivery Returns. Details
                    </span>
                  </ListItem>
                </List>
              </Card>
            </CardBody>

          </Card>
        </div>
      </div>
      <span className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-3 justify-items-center gap-2'>
        <ShowCard url={Product1} title='product 1' price1={1200} price2={1500} />
        <ShowCard url={Product2} title='product 1' price1={1200} price2={1500} />
        <ShowCard url={Product3} title='product 1' price1={1200} price2={1500} />
        <ShowCard url={Product4} title='product 1' price1={1200} price2={1500} />
      </span>
    </div>
  );
}