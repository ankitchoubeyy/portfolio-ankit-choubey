"use client";
import { TypeAnimation } from "react-type-animation";
import FocusAndResume from "./FocusAndResume";
import SocialIcons from "./SocialIcons";

const Hero = () => {
    return (
        <div className='my-4'>
            {/* Type Animation */}
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold my-4 md:my-6'>I make <span className='text-primary italic'><TypeAnimation
                sequence={[
                    "Web applications.",
                    1000,
                    "Fast, reliable websites.",
                    1000,
                    "Coffee.",
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            /></span> </h2>

            {/* Introduction */}
            <p className="text-sm md:text-base my-2 text-justify text-white/80">
                Hi, I&apos;m <span className="text-white font-semibold">Ankit Choubey</span>, a self-taught Full Stack Developer based in Noida, India. I specialize in
                <span className="text-primary font-medium"> React, Node.js, and Django</span>, building fast, reliable, and user-friendly web applications.
                I also share my knowledge and write technical articles&nbsp;
                <a
                    href="https://www.devshiping.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-blue-500 font-semibold underline underline-offset-2"
                >
                    here
                </a>.
            </p>

            {/* Focus and Resume */}
            <FocusAndResume />

            {/* Social Icons */}
            <SocialIcons />
        </div>
    )
}

export default Hero