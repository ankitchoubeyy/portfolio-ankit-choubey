import React from "react";
import { FaSuitcaseRolling } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "MERN Developer",
    company: "AppSquadz",
    duration: "November 2025 – Present",
    achievements: [
      "Currently contributing to the <em class='text-primary'>StaffDekho.com</em> platform at Appsquadz, working on scalable backend APIs and role-based modules for staff and employer management.",
      "Improving system performance and data accuracy through optimized database queries and backend logic.",
      "Collaborating with cross-functional teams to deliver production-ready features in an agile environment."
    ],
    tech: "React.js, Node.js, PHP, JavaScript, Firebase SDK, OpenAI SDK, JQuery",
  },
  {
    id: 2,
    role: "SDE - 1",
    company: "Oga Business Solutions",
    duration: "October 2024 – October 2025",
    achievements: [
      "Developed a full-stack <em class='text-primary'>Task Manager</em> system with robust back-end APIs and role-based access controls to streamline task assignment, tracking, and completion for internal teams.",
      "Engineered <em class='text-primary'>real-time dashboards</em> for sales tracking and <em class='text-primary'>Outstanding Dashboard</em> for payment monitoring using optimized SQL queries.",
      "Awarded <span class='text-primary font-semibold'>Best Performer of the Month (June 2025)</span> for outstanding project delivery.",
    ],
    tech: "React.js, Node.js, PHP, JavaScript, Firebase SDK, OpenAI SDK, Wordpress, JQuery",
  },
  {
    id: 3,
    role: "Full Stack - Intern",
    company: "MangosOrange Pvt Ltd",
    duration: "March 2024 – September 2024",
    achievements: [
      "Led the development of multiple web applications using <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.",
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
            {/* Company, Role, and Duration */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {exp.role},{" "}
                <span className="text-primary font-medium">{exp.company}</span>
              </h3>

              <p className="text-sm text-white/60 mt-1 sm:mt-0">
                {exp.duration}
              </p>
            </div>

            {/* Description */}
            <ul className="list-disc list-inside text-white/80 mt-3 space-y-1 text-sm md:text-base">
              {exp.achievements.map((item, i) => (
                <li
                  key={i}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>

            {/* Tech Stack */}
            <p className="text-xs md:text-sm text-white/60 mt-3">
              <span className="font-medium text-white/80">
                <span className="text-primary">Tech Stack:</span>
              </span>{" "}
              {exp.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
