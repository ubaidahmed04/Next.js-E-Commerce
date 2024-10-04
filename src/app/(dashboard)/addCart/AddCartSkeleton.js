import React from 'react';

export const AddCartSkeleton = () => {
  return (
    <div className='py-5 grid grid-cols-1 md:grid-cols-2 gap-8'>
      {/* Skeleton for StepperCard */}
      <div>
        <div className='animate-pulse'>
          {/* Title Skeleton */}
          <div className='h-10 w-40 bg-gray-300 rounded-md mb-4'></div>

          {/* Stepper Skeleton */}
          <div className='flex justify-between items-center gap-6'>
            <div className='h-12 w-12 bg-gray-300 rounded-full'></div>
            <div className='h-12 w-12 bg-gray-300 rounded-full'></div>
            <div className='h-12 w-12 bg-gray-300 rounded-full'></div>
          </div>

          {/* Card Skeletons */}
          <div className='mt-8 space-y-4'>
            <div className='h-32 w-full bg-gray-200 rounded-lg'></div>
            <div className='h-32 w-full bg-gray-200 rounded-lg'></div>
          </div>

          {/* Button Skeletons */}
          <div className='mt-8 flex justify-between'>
            <div className='h-10 w-24 bg-gray-300 rounded-md'></div>
            <div className='h-10 w-24 bg-gray-300 rounded-md'></div>
          </div>
        </div>
      </div>

      {/* Skeleton for PaymentCard */}
      <div>
        <div className='animate-pulse'>
          {/* Payment Card Title */}
          <div className='h-10 w-40 bg-gray-300 rounded-md mb-6'></div>

          {/* Summary Items Skeleton */}
          <div className='space-y-4'>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`flex items-center justify-between py-2 px-3 rounded-lg ${index === 4 ? "bg-gray-100 font-bold" : ""}`}
              >
                <div className='h-4 w-24 bg-gray-300 rounded-md'></div>
                <div className='h-4 w-12 bg-gray-300 rounded-md'></div>
              </div>
            ))}
          </div>

          {/* Grand Total Skeleton */}
          <div className='mt-6 h-10 w-full bg-gray-300 rounded-md'></div>
        </div>
      </div>
    </div>
  );
};
