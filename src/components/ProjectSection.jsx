"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState } from "react";
import { motion } from "framer-motion";
import { LuFolderOpen } from "react-icons/lu";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: `Next.js | TailwindCSS | Framer Motion`,
    image: `https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500`,
    tags: [`All`, `Frontend`],
    gitUrl: "https://github.com/ankitchoubeyy/portfolio",
    previewUrl: "https://portfolio-azure-nu-72.vercel.app/",
  },
  {
    id: 2,
    title: "MH Fitness – Strength Club ",
    description: `Next.js | Tailwind CSS | Vercel`,
    image: `https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D`,
    tags: [`All`, `Frontend`],
    gitUrl: "https://github.com/ankitchoubeyy/mh-fitness",
    previewUrl: "https://mhfitness.vercel.app/",
  },
  {
    id: 3,
    title: "Education Website",
    description: `React.js | Tailwind CSS | Web3forms`,
    image: `https://images.unsplash.com/photo-1636772523547-5577d04e8dc1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVkdWNhdGlvbiUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500`,
    tags: [`All`, `Frontend`],
    gitUrl: "https://github.com/ankitchoubeyy/education-website",
    previewUrl: "https://kaydee-institute.vercel.app/",
  },
  {
    id: 4,
    title: "Devshiping.com - Blog Website",
    description: `Next.js | Wordpress | Tailwind CSS`,
    image: `https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0aWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500`,
    tags: [`All`, `Frontend`],
    gitUrl: "https://github.com/ankitchoubeyy/devshiping-blog",
    previewUrl: "https://www.devshiping.com/",
  },
];

function ProjectsSection() {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const fileteredProjects = projectsData.filter((project) =>
    project.tags.includes(tag)
  );

  return (
    <>
      <div
        className=" text-white my-10"
        id="project"
      >
        <h2 className="text-primary font-extrabold text-2xl md:text-4xl flex items-center gap-2">
          <LuFolderOpen className="w-6 h-6" />Projects
        </h2>
        <div className="flex text-white flex-row justify-center items-center text-2xl gap-5 sm:gap-10 mt-5 md:mt-10">
          <ProjectTag
            onClick={handleTagChange}
            tag="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            tag="Frontend"
            isSelected={tag === "Frontend"}
          />
          <ProjectTag
            onClick={handleTagChange}
            tag="Backend"
            isSelected={tag === "Backend"}
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {fileteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgURL={project.image}
                tags={project}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsSection;
