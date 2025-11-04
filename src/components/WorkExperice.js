import React from "react";
import { FaSuitcaseRolling } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "SDE - Intern",
    company: "Oga Business Solutions",
    duration: "March 2025 – September 2025",
    achievements: [
      "Developed a full-stack Task Manager system with robust back-end APIs and role-based access controls to streamline task assignment, tracking, and completion for internal teams.",
      "Engineered real-time dashboards for sales tracking and payment monitoring using optimized MongoDB queries.",
      "Awarded Best Performer of the Month (June 2025) for outstanding project delivery.",
    ],
    tech: "React.js, Node.js, PHP, JavaScript, Firebase SDK, OpenAI SDK, Wordpress, JQuery",
  },
  {
    id: 2,
    role: "Full Stack - Intern",
    company: "MangosOrange Pvt Ltd",
    duration: "July 2024 – May 2025",
    achievements: [
      "Led the development of multiple web applications using React.js, Node.js, and MongoDB.",
      "Engineered and sustained web apps leveraging both front-end and back-end frameworks.",
      "Demonstrated strong teamwork and communication in a collaborative environment.",
    ],
    tech: "Next.js, TypeScript, Strapi CMS",
  },
];

const WorkExperience = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-2 mb-6">
        <FaSuitcaseRolling className="w-6 h-6 text-primary" />
        Work Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white/10 border border-white/10 rounded-2xl p-5 hover:border-primary transition-colors duration-300"
          >
            {/* Comany, Role and Duration */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {exp.role},{" "}
                <span className="text-primary font-medium">{exp.company}</span>
              </h3>

              <p className="text-sm text-white/60 mt-1 sm:mt-0">
                {exp.duration}
              </p>
            </div>

            {/* Achievements */}
            <ul className="list-disc list-inside text-white/80 mt-3 space-y-1 text-sm md:text-base">
              {exp.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <p className="text-xs md:text-sm text-white/60 mt-3">
              <span className="font-medium text-white/80"><span className="text-primary">Tech Stack:</span></span>{" "}
              {exp.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
