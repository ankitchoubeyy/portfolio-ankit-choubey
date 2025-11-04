import React from "react";
import { FaSuitcaseRolling } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Founding Engineer",
    company: "CrackAdmission Pvt Ltd",
    duration: "May 2025 – Present",
    achievements: [
      "Built a next-gen recruitment platform with resume parsing, Gmail-based intake, and AI interview evaluation using OpenAI SDK, automated via Google Cloud and Firebase Functions.",
      "Developed a scalable LMS with live sessions, structured assessments, and AI-driven personalization.",
      "Architected Firebase-based infrastructure with Firestore, Authentication, and Storage, deployed on Vercel, and integrated Razorpay workflows via n8n automation.",
    ],
    tech: "Next.js, TypeScript, Firebase SDK, OpenAI SDK, Google Cloud Functions, Vercel",
  },
  {
    id: 2,
    role: "Web Development Engineering Intern",
    company: "CrackAdmission Pvt Ltd",
    duration: "Oct 2024 – May 2025",
    achievements: [
      "Migrated a legacy WordPress site to Next.js, improving SEO and reducing load times by 40%.",
      "Built a custom Strapi CMS to streamline content workflows, reducing publishing time by 30%.",
      "Containerized deployments with Docker and optimized Nginx servers, boosting performance by 25%.",
      "Deployed full-stack app on AWS Lightsail with secure networking and automated backups, achieving 99.9% uptime while lowering costs by 20%.",
    ],
    tech: "Next.js, TypeScript, Nginx, Docker, AWS Lightsail, Strapi CMS",
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
