import './globals.css'
export const metadata = {
  title: 'Page Not Found',
  description: 'UA Store - Your one-stop shop for high-quality products at affordable prices. Explore a wide range of electronics, fashion, home essentials, and more. Shop now and enjoy exclusive deals, fast delivery, and exceptional customer service!',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
