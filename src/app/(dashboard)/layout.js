import "../globals.css";
import { Appbar, Footer } from '@/components'
import { Providers } from "@/app/Redux/Provider";
<meta name="description" content="UbaidAhmed Store - Your one-stop shop for high-quality products at affordable prices. Explore a wide range of electronics, fashion, home essentials, and more. Shop now and enjoy exclusive deals, fast delivery, and exceptional customer service!"></meta>
export const metadata = {
  title: 'UA Store',
  description: 'Ubaid Ahmed Store - Your one-stop shop for high-quality products at affordable prices. Explore a wide range of electronics, fashion, home essentials, and more. Shop now and enjoy exclusive deals, fast delivery, and exceptional customer service!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section className="myfont flex flex-col min-h-screen max-h-full" >
        <Providers>
        < Appbar />
        <main className="flex-grow max-w-screen-xl w-full flex flex-col mx-auto">
          {children}
        </main>
        <Footer />
        </Providers>
        </section>
      </body>
    </html>
  )
}
