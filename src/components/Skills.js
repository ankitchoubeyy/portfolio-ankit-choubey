import React from "react";
import { FaCode, FaDatabase, FaTools, FaLaptopCode } from "react-icons/fa";
import { SiFramework } from "react-icons/si";

const skillsData = [
  {
    category: "Languages",
    icon: <FaCode className="text-primary w-5 h-5" />,
    items: ["C++", "Python", "JavaScript", "TypeScript", "Php"],
  },
  {
    category: "Frameworks & Libraries",
    icon: <SiFramework className="text-primary w-5 h-5" />,
    items: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "Bootstrap",
      "jQuery",
    ],
  },
  {
    category: "Databases",
    icon: <FaDatabase className="text-primary w-5 h-5" />,
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Other",
    icon: <FaTools className="text-primary w-5 h-5" />,
    items: [
      "RESTful APIs",
      "Docker",
      "Node.js",
      "Linux",
      "GitHub",
      "Git",
    ],
  },
];

const Skills = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 flex items-center gap-2">
        <FaLaptopCode className="w-6 h-6 text-primary" />Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillsData.map((skill) => (
          <div
            key={skill.category}
            className="bg-white/10 border border-white/10 rounded-2xl p-5 hover:border-primary transition-colors duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              {skill.icon}
              <h3 className="text-lg font-semibold text-white">
                {skill.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {skill.items.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full hover:bg-primary/20 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
