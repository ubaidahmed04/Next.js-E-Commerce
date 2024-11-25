"use client";
import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";

export function DefaultPagination({ active, previousPage, nextPage }) {
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => {}, // No action for the icons since we handle page changes with buttons
  });

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="text"
        className="flex text-white bg-secondary hover:text-black items-center gap-2 border-2 shadow-md"
        onClick={previousPage}
        disabled={active === 1}
      >
        <TiArrowLeft strokeWidth={2} className="h-4 w-4 hidden sm:block" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {[1, 2,].map((index) => (
          <IconButton key={index} {...getItemProps(index)}>
            {index}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center text-white bg-secondary hover:text-black gap-2 border-2 shadow-md"
        onClick={nextPage}
        disabled={active === 5} // Assuming you have a max of 5 pages
      >
        Next
        <TiArrowRight strokeWidth={2} className="h-4 w-4 hidden sm:block" />
      </Button>
    </div>
  );
}
