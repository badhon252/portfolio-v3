"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white dark:bg-black">
      <h2 className="text-red-500 dark:text-white text-3xl font-bold">
        Oh no!
      </h2>
      <h2 className=" dark:text-white text-2xl font-bold">
        Something went wrong!
      </h2>
      <button
        className=" text-black dark:text-white font-bold border py-2 px-4 m-4 rounded-sm"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
