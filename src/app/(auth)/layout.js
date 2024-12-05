import "../globals.css";
import { Providers } from "../Redux/Provider";

export default function Layout({children}){
  
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