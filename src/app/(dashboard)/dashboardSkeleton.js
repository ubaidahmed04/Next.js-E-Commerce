import { Typography } from "@material-tailwind/react";

export function DashboardSkeleton() {
  return (
    <div className="py-4 animate-pulse">
      {/* Carousel Placeholder */}
      <div className="h-64 w-full bg-gray-300 rounded-lg mb-6"></div>

      {/* Flash Sales Title */}
      <Typography
        as="div"
        variant="h1"
        className="mb-4 h-6 w-40 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>

      {/* Countdown Placeholder */}
      <div className="flex gap-3 items-center mb-6">
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="h-4 w-12 bg-gray-300 rounded-full mb-1"></div>
            <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Flash Sales Products Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className="h-64 w-full bg-gray-300 rounded-lg"></div>
        ))}
      </div>

      {/* Categories Section */}
      <Typography
        as="div"
        variant="h1"
        className="mb-4 h-6 w-40 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <div className="flex gap-4 flex-wrap justify-center mb-6">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="h-24 w-24 bg-gray-300 rounded-lg"></div>
        ))}
      </div>

      {/* Announcement Section */}
      <div className="h-40 w-full bg-gray-300 rounded-lg mb-6"></div>

      {/* Our Products Title */}
      <Typography
        as="div"
        variant="h1"
        className="mb-4 h-6 w-40 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>

      {/* Our Products Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        {[...Array(8)].map((_, idx) => (
          <div key={idx} className="h-64 w-full bg-gray-300 rounded-lg"></div>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="flex justify-center mb-6">
        <div className="h-10 w-48 bg-gray-300 rounded-full"></div>
      </div>

      {/* New Arrivals Section */}
      <Typography
        as="div"
        variant="h1"
        className="mb-4 h-6 w-40 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className="h-64 w-full bg-gray-300 rounded-lg"></div>
        ))}
      </div>

      {/* Upper Footer Section */}
      <div className="flex flex-wrap justify-between gap-4">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="w-full md:w-1/3 h-24 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
}
