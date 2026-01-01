"use client";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter,  } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const socialData = [
  {
    id: 1,
    icon: <BsGithub />,
    path: "https://github.com/ankitchoubeyy",
    color: "hover:text-gray-400",
  },
  {
    id: 2,
    icon: <BsLinkedin />,
    path: "https://www.linkedin.com/in/ankitchoubeyy/",
    color: "hover:text-blue-500",
  },
  {
    id: 3,
    icon: <FaXTwitter />,
    path: "https://twitter.com/ankitchoubey_",
    color: "hover:text-sky-400",
  },
  {
    id: 4,
    icon: <SiGmail />,
    path: "mailto:imkitchoubey@gmail.com",
    color: "hover:text-red-400",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-around gap-4 mt-6 md:mt-10">
      {socialData.map((item) => (
        <a
          key={item.id}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white/80 text-3xl transition-transform duration-300 transform hover:scale-125 ${item.color}`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
