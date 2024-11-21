"use client"
import React from "react";
import {
  Navbar,
  Collapse,
  IconButton,
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
  Input,
  Badge,
} from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { SlBasket, SlMagnifier } from "react-icons/sl";
import { GiShoppingCart } from "react-icons/gi";
import { usePathname, useRouter } from 'next/navigation'
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "@/app/Redux/Slices/UserSlice";
import Image from "next/image";
import logoImg from '@/app/public/Images/logoshopeco.png'
const profileMenuItems = [
  {
    label: "My Profile",
    icon: FaRegCircleUser,
  },
  {
    label: "Edit Profile",
    icon: FaRegEdit,
  },
  {
    label: "Sign Out",
    icon: BiLogOutCircle,
  },
];
export function Appbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathName = usePathname()
  const dispatch = useDispatch()
  const router = useRouter()
  const closeMenu = () => setIsMenuOpen(false);
  const { isUser } = useSelector((state) => state.currUser)
  const cartItems = useSelector((state) => state.cart.items);
  
  // console.log("currentUser",cartItems)
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 myfont"
      >
        <Link href="/" className={`${pathName === '/' ? 'text-secondary underline fontbold translate-x-1' : ''} flex items-center`}>
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 myfont"
      >
        { !isUser ?
          <Link href="/products" className={`${pathName === '/products' ? 'text-secondary underline fontbold translate-x-1' : ''} flex items-center`}>
          Products
        </Link> :
          <Link href="/AddProduct" className={`${pathName === '/AddProduct' ? 'text-secondary underline fontbold translate-x-1' : ''} flex items-center`}>
          Add Product
        </Link>
        }
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" myfont"
      >
       { !isUser ?
          <Link href="/about" className={`${pathName === '/about' ? 'text-secondary underline fontbold translate-x-1' : ''} flex items-center`}>
          About
        </Link> :
          <Link href="/ProductList" className={`${pathName === '/AddProduct' ? 'text-secondary underline fontbold translate-x-1' : ''} flex items-center`}>
          Product List
        </Link>
        }
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 myfont"
      >
        <Link href="/contact" className={`${pathName === '/contact' ? 'text-secondary underline fontbold translate-x-1' : ''} flex items-center`}>
          Contact
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 myfont"
      >
        {!isUser ? (
  <Link
    href="/signin"
    className={`${
      pathName === '/register'
        ? 'text-secondary underline fontbold translate-x-1'
        : ''
    } flex items-center`}
  >
    SignIn
  </Link>
) : (
  <Link
    href="#"
    onClick={async () => {
      await dispatch(Logout()); 
      router.push('/signin');   
    }}
    className={`${
      pathName === '/signin'
        ? 'text-secondary underline fontbold translate-x-1'
        : ''
    } flex items-center`}
  >
    LogOut
  </Link>
)}

      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full bg-gray-100 rounded-none px-2 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900 ">
        {/* <Typography
          as="a"
          href="/"
          className="mr-1 sm:mr-4 cursor-pointer  text-sm md:text-xl font-bold py-1.5 sm:myfontbold"
        >
          ShopWeb
        </Typography> */}
        <Link href="/">
        <Image
          height={100}
          width={100}
          src={logoImg}
          alt="Logo"
          className="h-full w-full object-contain"
        />
        </Link>
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="flex items-center sm:gap-4">
          <span className="hidden sm:block">
            <Input placeholder="Search ...." className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }} icon={<SlMagnifier />} />
          </span>
          <Link href={'/addCart'}>
            <span className=" cursor-pointer hidden lg:block">
            <Badge 
              content={cartItems?.length}
              className={cartItems?.length == 0|| null? 'hidden':'flex items-center justify-center p-0'}>
              <GiShoppingCart size={30} />
            </Badge>
            </span>
          </Link>
          

          <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end"   >
            <MenuHandler >
              <Button
                variant="text"
                color="blue-gray"
                className="items-center rounded-full p-0 hidden lg:block "
              >
                <Avatar
                  variant="circular"
                  size="md"
                  alt="tania andrew"
                  withBorder={true}
                  color="blue-gray"
                  className="rounded-full p-0.5"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </Button>
            </MenuHandler>
            <MenuList className="p-1 hidden lg:block">
              {profileMenuItems.map(({ label, icon }, key) => {
                const isLastItem = key === profileMenuItems.length - 1;
                return (
                  <MenuItem
                    key={label}
                    onClick={closeMenu}
                    className={`flex items-center gap-2 rounded ${isLastItem
                      ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      : ""
                      }`}
                  >
                    {React.createElement(icon, {
                      className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                      strokeWidth: 2,
                    })}


                    <Typography
                      as="span"
                      variant="small"
                      className="myfont"
                      color={isLastItem ? "red" : "inherit"}
                    >
                      <Link href={`${isLastItem}?'/login'?"/signup"`}>
                        {label}
                      </Link>
                    </Typography>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </div>
        <div className="flex items-center lg:hidden">

        <Link href={'/addCart'}>
            <span className=" cursor-pointer lg:hidden">
            <Badge content={cartItems?.length}
             className={cartItems?.length == 0 || null? 'hidden':'flex items-center justify-center p-0'}
            >
              <GiShoppingCart size={30} />
            </Badge>
            </span>
          </Link>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          
          {openNav ? (
            <RxCross2 className="h-6 w-6" />
          ) : (
            <HiMenuAlt1 className="h-6 w-6" />
          )}
        </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end" className='flex md:hidden'>
        
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center rounded-full p-0  "
            >
              <Avatar
                variant="circular"
                size="md"
                alt="tania andrew"
                withBorder={true}
                color="blue-gray"
                className=" p-0.5"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
            </Button>
          </MenuHandler>
          <MenuList className="p-1  md:hidden">
            {profileMenuItems.map(({ label, icon }, key) => {
              const isLastItem = key === profileMenuItems.length - 1;
              return (
                <MenuItem
                  key={label}
                  onClick={closeMenu}
                  className={`flex items-center gap-2 rounded ${isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                    }`}
                >
                  {React.createElement(icon, {
                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    strokeWidth: 2,
                  })}
                  <Typography
                    as="span"
                    variant="small"
                    className="myfont"
                    color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Collapse>
    </Navbar>
  );
}