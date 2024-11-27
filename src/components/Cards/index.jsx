"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
  Button
} from "@material-tailwind/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
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

export function CardDefault({ url, title, price1, price2, navigate,onAddToCart,quantity }) {
  return (
    
    <Card className="min-w-full h-fit bg-blue-gray-50 max-w-[14rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray " className="group relative">
        <Image
          height={200}
          width={220}
          src={url}
          alt="ui/ux review check"
          className="h-48 w-full object-contain"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        {/* Add to Cart button */}
       
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </IconButton>
      </CardHeader>

      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium myfont">
            {title}
          </Typography>
        </div>

        <Typography
          color="blue-gray"
          className="flex items-center gap-1.5 font-medium text-lg"
        >
          <span className="text-secondary fontbold myfont">{`Rs.${price1}`}</span>
          <del className="text-gray-700 mr-2 myfont">{`Rs.${parseInt(price2)+300 }`}</del>
        </Typography>

        <Typography
          color="blue-gray"
          className="flex items-center gap-1.5 myfont"
        >
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          ({quantity})
        </Typography>
      <span className="flex justify-between items-center">
      <Link href={`/products/${navigate}`}>
      
        <Typography variant="h5" className="font-medium text-blue-500 hover:underline myfont">
            See more
          </Typography>
      </Link>

          <Button
          size="sm"
          className="opacity-100  w-fit h-8 bg-secondary text-white flex gap-2  p-2"
          onClick={onAddToCart}
        >
          Add to Cart <MdOutlineShoppingCart className="h-4 w-4 text-white"/>
        </Button>
      </span>
      </CardBody>
    </Card>
  );
}
