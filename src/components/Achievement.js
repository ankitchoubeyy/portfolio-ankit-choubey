import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaAward } from "react-icons/fa6";

const achievements = [
  {
    id: 1,
    title: "Performer of the Month, June 2025",
    description:
      "Honored at OGA Business Solutions for exceptional performance and dedication in delivering high-quality, impactful development work.",
  },
  {
    id: 2,
    title: "MERN Certified Developer - Udemy 2024",
    description:
      "Developed strong expertise as a MERN (MongoDB, Express.js, React.js, Node.js) Stack Developer while gaining hands-on experience with Git, Linux, and a variety of modern web technologies.",
  },

];

const Achievements = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 flex items-center gap-2">
        <FaAward className="w-6 h-6 text-primary" /> Achievements
      </h2>

      <ul className="space-y-5">
        {achievements.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-3 group transition-transform duration-300 hover:translate-x-1"
          >
            <div className="mt-1 text-primary group-hover:text-green-400 transition-colors">
              <IoIosArrowForward size={18} />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base md:text-lg leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 mt-1">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
