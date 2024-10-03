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
import Image from "next/image";

 export function ProfileCard({url,base64url}) {
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
            blurDataURL={base64url}
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="myfont">
          Tom Cruise
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 myfont">
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
          <Typography className="myfont">January 10</Typography>
        </CardFooter>
      </Card>
    );
  }