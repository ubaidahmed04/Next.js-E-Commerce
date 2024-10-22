"use client"
import "../globals.css";
import { usePathname } from "next/navigation";

export default function Layout({children}){
  const pathname = usePathname()
  const metadata = {
    title: pathname,
    description: 'Generated by Next.js',
  }
    return(
      <html lang="en">
       <body
        className="myfont flex flex-col min-h-screen w-full h-full items-center justify-center" 
      >
        <main className=" max-w-screen-xl flex items-center justify-center py-16 w-full h-full mx-auto ">
          {children}
        </main>
      </body>
    </html>
    )
}