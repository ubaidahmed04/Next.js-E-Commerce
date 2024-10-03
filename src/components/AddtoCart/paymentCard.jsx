"use client";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const Paymentcard = [
  {
    name: "Sub Total",
    price: 400,
  },
  {
    name: "Discount",
    price: 420,
  },
  {
    name: "Tax",
    price: 340,
  },
  {
    name: "Shipping",
    price: 520,
  },
  {
    name: "Total",
    price: 780,
  },
];

export function PaymentCard() {
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
              <Typography variant="body1" color="blue-gray" className="text-lg">
                {name}
              </Typography>
              <Typography variant="body1" color="blue-gray" className="text-lg">
                ${price}
              </Typography>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <Typography variant="h6" color="blue-gray" className="text-lg font-bold text-center">
            Grand Total: ${Paymentcard.reduce((total, item) => total + item.price, 0)}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
