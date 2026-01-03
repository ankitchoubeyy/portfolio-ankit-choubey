import Link from "next/link";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex flex-col justify-center items-center text-center px-6">
      
      {/* Icon */}
      <FaExclamationTriangle className="text-primary text-7xl mb-6 animate-pulse" />

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        404 – Page Not Found
      </h1>

      {/* Description */}
      <p className="text-gray-400 max-w-md mb-8">
        Oops! The page you&apso;re looking for doesn&apos;t exist or may have been moved.
      </p>

      {/* Action */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
      >
        Go back home
      </Link>

    </div>
  );
}

export default NotFound;
