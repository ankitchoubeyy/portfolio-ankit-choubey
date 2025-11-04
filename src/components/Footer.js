"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 mt-20 pt-10 pb-6 text-center text-gray-400">
      {/* Top Line */}
      <div className="flex flex-col items-center space-y-3 md:space-y-4">
        {/* Status Line */}
        <div className="flex items-center gap-2 text-white/80 text-sm md:text-base">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p>Let&apos;s connect and build something amazing together</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 text-primary font-medium mt-2">
          <Link
            href="https://github.com/ankitchoubeyy"
            target="_blank"
            className="hover:text-green-400 transition-colors duration-300"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/ankitchoubeyy/"
            target="_blank"
            className="hover:text-green-400 transition-colors duration-300"
          >
            LinkedIn
          </Link>
          <Link
            href="https://twitter.com/codewithchoubey"
            target="_blank"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Twitter
          </Link>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-800 mt-6 pt-4">
        <p className="text-sm text-gray-500">
          © {currentYear} · Built by{" "}
          <span className="text-primary font-medium">Ankit Choubey</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
