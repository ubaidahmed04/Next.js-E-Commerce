import React from 'react';

export const ContactSkeleton = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-start py-8 mx-auto'>
        {/* Skeleton for Card */}
        <div className="mt-6 w-96 shadow-lg">
          <div className="flex flex-col gap-4 p-4 animate-pulse">
            {/* Call To Us Skeleton */}
            <div className='flex items-center gap-4'>
              <div className="bg-gray-300 w-12 h-12 rounded-full"></div>
              <div className="h-6 w-24 bg-gray-300 rounded-md"></div>
            </div>
            <div className="h-4 w-48 bg-gray-300 rounded-md"></div>
            <div className="h-4 w-32 bg-gray-300 rounded-md"></div>
            <div className="py-6 border-b-4 border-gray-200"></div>

            {/* Write To Us Skeleton */}
            <div className='flex items-center gap-4'>
              <div className="bg-gray-300 w-12 h-12 rounded-full"></div>
              <div className="h-6 w-28 bg-gray-300 rounded-md"></div>
            </div>
            <div className="h-4 w-56 bg-gray-300 rounded-md"></div>
            <div className="h-4 w-40 bg-gray-300 rounded-md"></div>
            <div className="h-4 w-40 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        {/* Skeleton for Contact Form */}
        <div className="w-full h-96 bg-gray-200 animate-pulse mt-6 md:mt-0 rounded-md"></div>
      </div>
    </div>
  );
};
