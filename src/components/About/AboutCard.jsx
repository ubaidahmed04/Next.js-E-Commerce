"use client"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
  import { FaInstagram } from "react-icons/fa";
  import { FaLinkedinIn } from "react-icons/fa";
  import { BsTwitterX } from "react-icons/bs";
import About1 from "@/components/Images/about1.png";
import Image from "next/image";

  export function ProfileCard({url}) {
    return (
      <Card className="w-full ">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none bg-blue-gray-50"
        >
          <Image
            src={url}
            height={100}
            width={300}
            alt="ui/ux review check"
            className="h-48 w-full object-contain"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
          Tom Cruise
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
          Founder & Chairman
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center  justify-between">
          <div className="flex items-center gap-2">
          <Tooltip content="Linkedin">
              <FaLinkedinIn
              />
            </Tooltip>
          <Tooltip content="Twitter">
              <BsTwitterX
              />
            </Tooltip>
            <Tooltip content="Instagram">
              <FaInstagram
              />
            </Tooltip>
          </div>
          <Typography className="font-normal">January 10</Typography>
        </CardFooter>
      </Card>
    );
  }