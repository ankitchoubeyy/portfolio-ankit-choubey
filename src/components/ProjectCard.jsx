import React from "react";
import Link from "next/link";
import { IoArrowRedo } from "react-icons/io5";

function ProjectCard({ imgURL, title, description, gitUrl, previewUrl }) {
  return (
    <div>
      <div
        className="min-h-60 md:min-h-74 rounded-t-xl mt-10 relative group"
        style={{ background: `url(${imgURL})`, backgroundSize: "cover" }}
      ></div>
      <div className="text-white rounded-b-xl bg-white/10 py-6 px-4">
        <h5 className="text-md sm:text-xl md:text-2xl text-primary font-semibold mb-1 md:mb-2">
          {title}
        </h5>
        <p className="text-white/50 text-sm ">{description}</p>

        <div className="flex items-center gap-4 mt-4">
          <Link href={gitUrl} target="_blank" className="text-sm bg-white/10 text-primary px-3 py-2 rounded-full">
            GitHub
          </Link>
          <Link href={previewUrl} target="_blank" className="text-sm bg-white/10 text-primary px-3 py-2 rounded-full">
            Preview
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
