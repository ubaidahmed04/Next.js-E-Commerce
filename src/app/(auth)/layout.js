import "../globals.css";

export default function Layout({children}){
    return(
      <html lang="en">
      <body
        className="myfont flex flex-col min-h-screen" 
      >
        <main className="flex-grow max-w-screen-xl  bg-gray-300 w-full h-full mx-auto">
          {children}
        </main>
      </body>
    </html>
    )
}