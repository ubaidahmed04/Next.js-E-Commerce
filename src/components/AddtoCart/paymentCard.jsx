"use client";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";

export function PaymentCard() {
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal =  cartItems.reduce((acc, item) => acc + Number(item.price), 0);
  const discount = subtotal * 0.10; 
  const tax = (subtotal - discount) * 0.05; 
  const shipping = 500;
  const total = subtotal - discount + tax + shipping;
  
  const Paymentcard = [
    {
      name: "Sub Total",
      price: subtotal.toFixed()
    },
    {
      name: "Discount",
      price: discount.toFixed()
    },
    {
      name: "Tax",
      price: tax.toFixed(),
    },
    {
      name: "Shipping",
      price: shipping.toFixed(),
    },
    {
      name: "Total",
      price: total.toFixed(),
    },
  ];
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border border-gray-200 rounded-lg bg-white">
      <CardBody>
        <div className="mb-6">
          <Typography variant="h5" color="blue-gray" className="font-bold text-center text-xl">
            Order Summary
          </Typography>
        </div>

        <div className="border-b border-gray-300 mb-4"></div>
        <div className="space-y-4">
          {Paymentcard.map(({ name, price }, index) => (
            <div
              key={index}
              className={`flex items-center justify-between py-2 px-3 rounded-lg ${index === Paymentcard.length - 1 ? "bg-gray-100 font-bold" : ""
                }`}
            >
              {
                name=="Total" ? 
                <div className=" bg-blue-50 p-4 rounded-lg w-full">
                <Typography variant="h6" color="blue-gray" className="text-lg font-bold text-center">
                  Grand Total: Rs.{price}
                </Typography>
              </div>:
              <>
              <Typography variant="body1" color="blue-gray" className="text-lg">
              {name}
            </Typography>
            <Typography variant="body1" color="blue-gray" className="text-lg">
              Rs.{price}
            </Typography>
            </>
              }
              
            </div>
            
          ))}
        </div>

        
      </CardBody>
    </Card>
  );
}
