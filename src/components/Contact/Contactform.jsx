"use client"
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea
} from "@material-tailwind/react";

export function ContactForm() {
  return (
    <Card className="p-8 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <Typography variant="h3" color="blue-gray" className="text-center mb-6 font-bold">
        Contact Us
      </Typography>
      <Typography color="gray" className="text-center mb-8">
        Have any questions&#63; We&aposd; love to hear from you Please fill out the form below &#46;
      </Typography>

      <form className="space-y-6">
        <div className="flex flex-col gap-6">
          <Input 
            variant="outlined" 
            label="Name" 
            type="text" 
            placeholder="Your Name" 
            className="rounded-lg shadow-sm"
          />
          <Input 
            variant="outlined" 
            type="email" 
            label="Email" 
            placeholder="Your Email" 
            className="rounded-lg shadow-sm"
          />
          <Input 
            variant="outlined" 
            type="phone" 
            label="Phone" 
            placeholder="Your Phone" 
            className="rounded-lg shadow-sm"
          />
          <Textarea 
            label="Message" 
            // placeholder="Your Message" 
            className="rounded-lg shadow-sm"
          />
        </div>

        <div className="flex justify-end mt-8">
          <Button className="bg-secondary text-white rounded-lg px-6 py-3">
            Send Message
          </Button>
        </div>
      </form>
    </Card>
  );
}
