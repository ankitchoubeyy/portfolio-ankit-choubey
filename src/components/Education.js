import React from "react";
import { IoMdSchool } from "react-icons/io";

const educationData = [
  {
    id: 1,
    duration: "September 2021 - August 2025",
    institution: "Mangalmay Institute of Engineering and Technology",
    degree: "B.Tech",
    stream: "Artificial Intelligence",
    cgpa: "7.5",
  },
  {
    id: 2,
    duration: "August 2019 - April 2021",
    institution: "Shaifali Public School",
    degree: "Senior Secondary School",
    stream: "Science",
    cgpa: "7",
  },
];

const Education = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 flex items-center gap-2">
        <IoMdSchool className="w-6 h-6 text-primary" /> Education
      </h2>

      <div className="relative ml-4 pl-8 space-y-10">
        {/* Vertical Line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-700"></div>
        
        {educationData.map((edu, index) => (
          <div key={edu.id} className="relative">
            {/* Timeline Dot */}
            <div
              className={`absolute -left-[38px] top-0 w-4 h-4 rounded-full bg-white border-4 border-gray-900 shadow-[0_0_10px_rgba(74,222,128,0.8)]`}
            ></div>

            {/* Duration */}
            <p className="text-sm text-gray-400 mb-1">{edu.duration}</p>

            {/* Title */}
            <h3 className="text-lg md:text-xl text-primary font-semibold leading-snug">
              {edu.degree} at{" "}
              <span className="text-white">{edu.institution}</span>
            </h3>

            {/* Details */}
            <ul className="text-white/80 mt-2 text-sm md:text-base space-y-1">
              <li>
                <span className="text-gray-400">Stream:</span> {edu.stream}
              </li>
              <li>
                <span className="text-gray-400">CGPA:</span> {edu.cgpa}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;