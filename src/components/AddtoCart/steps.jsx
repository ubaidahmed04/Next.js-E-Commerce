"use client"
import React from "react";
import { Stepper, Step, Button, Card, Input, IconButton } from "@material-tailwind/react";
import { BsCreditCard2Front } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/app/Redux/Slices/addToCart";
export function StepperCard() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id)); 
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div className="mt-8 w-full">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            <div className="space-y-4 w-full">
              { cartItems.length > 0 ? 
                cartItems.map((item, index) => (
                  <Card className="p-6 w-full h-full flex items-center bg-white shadow-md rounded-lg space-x-6">
                    <IconButton
                      size="sm"
                      color="red"
                      variant="text"
                      className="!absolute top-4 right-4 rounded-full"
                      onClick={() => handleRemoveFromCart(item._id)}
                    >
                     <FaRegTrashAlt size={20}/>
                    </IconButton>
                    <div className="flex-shrink-0">
                      <Image
                        width={100}
                        height={100}
                        src={item.file[0]}
                        alt="Product 1"
                        className="h-24 w-24 rounded-lg object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-between items-center gap-2">
                      <p className="text-lg font-bold text-gray-800 py-2">{item.productname}</p>
                      <p className="text-gray-500">{item.price}</p>
                      {/* <p className="text-sm text-gray-600">Quantity: 1</p> */}
                    </div>
                  </Card>
                )
              ) :<p className="text-center font-bold myfont text-xl">Your cart is empty.</p>
              }




            </div>

          </div>
        );
      case 1:
        return (
          <div className="mt-8 w-full ">
            <h2 className="text-xl font-bold fontbold mb-4">Checkout Information</h2>
            <div className="grid gap-4">
              <Input label="Full Name" />
              <Input label="Address" />
              <Input label="City" />
              <Input label="Postal Code" />
              <Input label="Phone Number" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="mt-8 w-full ">
            <h2 className="text-xl font-bold fontbold mb-4">Payment</h2>
            <div className="space-y-4 w-full ">
              <Card className="p-4 w-full ">
                <span className="myfont font-bold py-3">Credit Card</span>
                <div className="flex flex-col gap-4">
                  <Input label="Card Number" />
                  <Input label="Expiration Date" />
                  <Input label="CVV" />
                </div>
              </Card>
              <Button color="green" className="bg-secondary" >
                Confirm Payment
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full py-4 px-8 ">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        className=" z-0 relative"
      >
        <Step onClick={() => setActiveStep(0)}>
          <IoBagAddOutline className="h-5 w-5 " />
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <MdOutlineShoppingCart className="h-5 w-5" />
        </Step>
        <Step onClick={() => setActiveStep(2)}>
          <BsCreditCard2Front className="h-5 w-5" />
        </Step>
      </Stepper>

      <div className="mt-8">{renderStepContent()}</div>

      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
  );
}
