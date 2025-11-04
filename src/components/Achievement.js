import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaAward } from "react-icons/fa6";

const achievements = [
  {
    id: 1,
    title: "Perfomer of the Month, June 2025",
    description:
      "Led a 6-member team to develop an AI-powered resume shortlisting system integrated with OpenAI and Firebase, selected among top national entries.",
  },
  {
    id: 2,
    title: "Top Contributor - Open Source 2024",
    description:
      "Contributed to multiple open-source projects focused on web accessibility and developer tooling, including PRs merged into major GitHub repositories.",
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner Certified",
    description:
      "Earned AWS certification demonstrating strong foundational knowledge in cloud infrastructure, deployment, and security practices.",
  },
  {
    id: 4,
    title: "Technical Speaker at DevConnect 2024",
    description:
      "Delivered a session on 'Building Scalable Full Stack Apps with Next.js and Firebase' attended by over 100 developers.",
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
