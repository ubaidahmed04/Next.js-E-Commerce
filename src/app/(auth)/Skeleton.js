import { Typography } from "@material-tailwind/react";

export function LoginSkeleton() {
  return (
    <div className="max-w-sm mx-auto mt-16 animate-pulse">
      {/* Title Placeholder */}
      <Typography
        as="div"
        variant="h1"
        className="mb-6 h-6 w-48 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>

      {/* Input Field Placeholder 1 */}
      <div className="mb-4">
        <Typography
          as="div"
          variant="paragraph"
          className="h-3 w-full rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
      </div>

      {/* Input Field Placeholder 2 */}
      <div className="mb-4">
        <Typography
          as="div"
          variant="paragraph"
          className="h-3 w-full rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
      </div>

      {/* Button Placeholder */}
      <div className="mb-6">
        <Typography
          as="div"
          variant="paragraph"
          className="h-10 w-full rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
      </div>

      {/* Link or Other Placeholder */}
      <Typography
        as="div"
        variant="paragraph"
        className="h-3 w-24 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
    </div>
  );
}
