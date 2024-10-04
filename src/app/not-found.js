// src/app/not-found.js

import Link from 'next/link';
import RootLayout from './layout';
const NotFoundPage = () => {
  return (
   <div className='flex flex-col justify-center items-center w-full h-screen'>
    <div>
    <h1 className="text-6xl font-bold text-red-500 text-center">404</h1>
        <h1 className='text-2xl fontbold text-secondary text-center'> Page Not Found</h1>
        <p className="mt-2 text-gray-600">The page you are looking for does not exist.</p>
        <Link href="/" className="mt-4 px-6 py-2 text-xl myfont bg-gray-700 text-white  rounded-lg hover:bg-blue-600 transition duration-200">
        Go back to Home
      </Link>
    </div>
   </div>
  );
};

export default NotFoundPage;
