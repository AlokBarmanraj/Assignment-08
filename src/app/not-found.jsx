"use client";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-500 text-center max-w-md mb-6">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link href="/">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition duration-300 cursor-pointer">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
