import "../globals.css";
import { Appbar, Footer } from '@/components'
import { Providers } from "@/app/Redux/Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="description" content="UbaidAhmed Store - Your one-stop shop for high-quality products at affordable prices. Explore a wide range of electronics, fashion, home essentials, and more. Shop now and enjoy exclusive deals, fast delivery, and exceptional customer service!" />
      <meta name="description" content="UbaidAhmed Store - Your one-stop shop for high-quality products at affordable prices. Explore a wide range of electronics, fashion, home essentials, and more. Shop now and enjoy exclusive deals, fast delivery, and exceptional customer service!" />
      <meta name="keywords" content="UbaidAhmed Store, online shopping, affordable products, electronics, fashion, home essentials, buy products online, fast delivery, exclusive deals, customer service" />
      <meta name="author" content="Ubaid Ahmed" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="UbaidAhmed Store - High-Quality Products at Affordable Prices" />
      <meta property="og:description" content="Explore a wide range of electronics, fashion, home essentials, and more at UbaidAhmed Store. Shop now for exclusive deals and fast delivery!" />
      <meta property="og:image" content="https://ubaidahmed.store" />
      <meta property="og:url" content="https://ubaidahmed.store" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="UbaidAhmed Store - High-Quality Products at Affordable Prices" />
      <meta name="twitter:description" content="Shop electronics, fashion, home essentials, and more with fast delivery and exclusive deals at UbaidAhmed Store." />
      <meta name="twitter:image" content="https://ubaidahmed.store/" />
      <link rel="icon" href="https://ubaidahmed.store/" type="image/x-icon" />
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
