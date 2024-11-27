"use client"
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";
import Image from "next/image";
import avatarImg from '@/app/public/Images/avatareco.png'

export function UpperFooter({title,subtitle,customStyle,target, url}) {
  return (
    <Card className={`mt-6 w-contain flex flex-col items-center justify-center   + ${customStyle}`}>
      <CardBody className="flex flex-col items-center justify-center">
      <Avatar
        src={url}
        alt="avatar"
        withBorder={true}
        className="p-0.5"
      />

        <Typography variant="h3" color="blue-gray" className="mt-2 fontbold text-4xl  myfont">
       {target}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2 fontbold myfont">
       {title}
        </Typography>
        <Typography variant="h6" className="myfont">
         {subtitle}
        </Typography>
      </CardBody>
    </Card>
  );
}