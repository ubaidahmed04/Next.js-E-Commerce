"use client"
import "../globals.css";
import { usePathname } from "next/navigation";
import { Providers } from "../Redux/Provider";

export default function Layout({children}){
  const metadata = {
    title: 'UA Store',
    description: 'Ubaid Ahmed Store - Your one-stop shop for high-quality products at affordable prices. Explore a wide range of electronics, fashion, home essentials, and more. Shop now and enjoy exclusive deals, fast delivery, and exceptional customer service!',
  }
    return(
      <html lang="en">
       <body
        className="myfont flex flex-col min-h-screen w-full h-full items-center justify-center" 
      >
        <Providers>
        <main className=" max-w-screen-xl flex items-center justify-center py-16 w-full h-full mx-auto ">
          {children}
        </main>
        </Providers>
      </body>
    </html>
    )
}