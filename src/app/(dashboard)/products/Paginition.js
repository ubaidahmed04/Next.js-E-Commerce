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
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={previousPage}
        disabled={active === 1}
      >
        <TiArrowLeft strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((index) => (
          <IconButton key={index} {...getItemProps(index)}>
            {index}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={nextPage}
        disabled={active === 5} // Assuming you have a max of 5 pages
      >
        Next
        <TiArrowRight strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
