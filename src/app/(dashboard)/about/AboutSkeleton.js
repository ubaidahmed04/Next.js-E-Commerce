import React from 'react';

const AboutSectionSkeleton = () => {
  return (
    <div className="px-4">
      {/* Skeleton for Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 w-full py-8">
        {/* Image Skeleton */}
        <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
        {/* Text Skeleton */}
        <div className="flex flex-col gap-4">
          <div className="h-8 w-1/2 bg-gray-200 animate-pulse"></div>
          <div className="h-6 w-full bg-gray-200 animate-pulse"></div>
          <div className="h-6 w-full bg-gray-200 animate-pulse"></div>
          <div className="h-6 w-3/4 bg-gray-200 animate-pulse"></div>
        </div>
      </div>

      {/* Skeleton for Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="border-2 p-4 rounded-lg bg-gray-200 animate-pulse h-24"></div>
        ))}
      </div>

      {/* Skeleton for Profile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full justify-items-center py-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="w-full h-48 bg-gray-200 animate-pulse rounded-lg"></div>
        ))}
      </div>

      {/* Skeleton for Footer Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 py-5">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="p-4 bg-gray-200 animate-pulse rounded-lg h-24"></div>
        ))}
      </div>
    </div>
  );
};

export default AboutSectionSkeleton;
