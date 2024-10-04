import React from 'react';

export const ProductSkeleton = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4'>
      {Array(12).fill().map((_, index) => (
        <div
          key={index}
          className='min-w-full max-w-[14rem] h-80 bg-gray-200 animate-pulse shadow-lg rounded-lg flex flex-col items-center justify-center'
        >
          <div className='h-48 w-full bg-gray-300 mb-4'></div>
          <div className='h-6 w-3/4 bg-gray-300 mb-2'></div>
          <div className='h-4 w-1/2 bg-gray-300 mb-4'></div>
          <div className='h-6 w-1/2 bg-gray-300'></div>
        </div>
      ))}
    </div>
  );
};
