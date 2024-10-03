import "../globals.css";

export default function Layout({children}){
    return(
      <html lang="en">
      <body
        className="myfont flex flex-col min-h-screen " 
      >
        <main className="flex-grow max-w-screen-xl flex items-center justify-center  w-full h-full mx-auto">
          {children}
        </main>
      </body>
    </html>
    )
}