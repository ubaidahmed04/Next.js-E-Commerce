import React from 'react';

const ProductDetailSkeleton = () => {
  return (
    <div className="p-4 flex flex-col items-center space-y-4">
      {/* Skeleton for Image */}
      <div className="w-full max-w-lg h-80 bg-gray-200 animate-pulse rounded-lg"></div>
      
      {/* Skeleton for Title */}
      <div className="h-8 w-3/4 bg-gray-200 animate-pulse rounded"></div>
      
      {/* Skeleton for Price */}
      <div className="h-6 w-1/2 bg-gray-200 animate-pulse rounded"></div>
    </div>
  );
};

export default ProductDetailSkeleton;
