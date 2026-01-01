"use client";

export default function FocusAndResume() {
  return (
    <div className="mt-6 text-white/90">
      {/* Current Focus */}
      <p className="text-sm leading-relaxed">
        Currently, I&apos;m exploring{" "}
        <span className="relative inline-block mx-1">
          <span className="absolute inset-0 bg-gray-800/50 backdrop-blur-md rounded px-1"></span>
          <span className="relative z-10 text-primary font-bold italic px-1">
            Agentic AI
          </span>
        </span>
        , and
        <span className="relative inline-block mx-1">
          <span className="absolute inset-0 bg-gray-800/50 backdrop-blur-md rounded px-1"></span>
          <span className="relative z-10 text-green-400 font-semibold italic px-1">
            React Native
          </span>
        </span>{" "}
        along with other exciting technologies.
      </p>

      {/* Resume */}
      <a
        href="https://drive.google.com/file/d/12MAJPHr_fuHZAyQagZEAqQjGJOsYswBV/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary mt-5 inline-flex items-center gap-2 opacity-90 text-sm hover:underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-dot animate-ping text-green-400"
        >
          <circle cx="12.1" cy="12.1" r="1"></circle>
        </svg>
        Resume
      </a>
    </div>
  );
}
