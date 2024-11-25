import React from 'react';

const ProductDetailSkeleton = () => {
  return (
    <div class="p-4 flex flex-col items-center space-y-6">
    <div class="w-full max-w-2xl h-96 bg-gray-200 animate-pulse rounded-lg"></div>
  
    <div class="h-8 w-3/4 bg-gray-200 animate-pulse rounded"></div>
  
    <div class="h-6 w-1/2 bg-gray-200 animate-pulse rounded"></div>
  
    <div class="w-full max-w-2xl space-y-4">
      <div class="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
      <div class="h-4 w-5/6 bg-gray-200 animate-pulse rounded"></div>
      <div class="h-4 w-3/4 bg-gray-200 animate-pulse rounded"></div>
    </div>
  
    <div class="w-full max-w-2xl">
      <h3 class="h-6 w-1/4 bg-gray-200 animate-pulse rounded mb-4"></h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(3).fill().map((_, index) => (
          <div
            key={index}
            class="min-w-full max-w-[20rem] h-80 bg-gray-200 animate-pulse shadow-lg rounded-lg flex flex-col items-center justify-center"
          >
            <div class="h-48 w-full bg-gray-300 mb-4 rounded"></div>
            <div class="h-6 w-3/4 bg-gray-300 mb-2 rounded"></div>
            <div class="h-4 w-1/2 bg-gray-300 mb-4 rounded"></div>
            {/* <div class="h-6 w-1/2 bg-gray-300 rounded"></div> */}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default ProductDetailSkeleton;
