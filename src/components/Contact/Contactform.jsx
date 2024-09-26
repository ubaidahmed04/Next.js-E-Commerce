"use client"
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea
  } from "@material-tailwind/react";
  import { z } from 'zod';
  const schema = z.object({
    name: z.string().min(1, "Name is required").max(50, "Name is too long"),
    email: z.string().email("Invalid email address"),
  });
  export function ContactForm() {
    return (
       <Card color="transparent"  shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Contact Us
        </Typography>
       
        <form className="p-4">
  <div className="flex flex-col gap-16 ">
    <span >
      <Input variant="outlined" label="Name" type="text" placeholder="Name" />
    </span>
    <span>
      <Input variant="outlined" type="email" label="Email" placeholder="Email" />
    </span>
    <span>
      <Input variant="outlined" type="phone" label="Phone" placeholder="Phone" />
    </span>
    <span className="col-span-1">
      <Textarea label="Message" />
    </span>
  </div>

  <span className=" flex justify-end">
  <Button className="mt-6 w-fit bg-secondary px-4 text-end">
  Send Massage
  </Button>
  </span>
</form>

        
      </Card>
    );
  }