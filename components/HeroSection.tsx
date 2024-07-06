"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { scrollIntoView } from "@/utils/scrollIntoView";
import { FaChevronDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const sequence = [
  "Junior Full Stack Developer",
  2000, // Waits 2 seconds
  "Carlos Nina",
  2000,
];
export const HeroSection = () => {
  return (
    <div className="relative px-0 container flex flex-col lg:flex-row lg:flex-grow xl:max-w-none text-black dark:text-white m-0 min-h-screen">
      <div className="relative z-10 w-full bg-off-white dark:bg-background-dark bg-[linear-gradient(to_right,#eaeaea_1px,transparent_1px),linear-gradient(to_bottom,#eaeaea_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#1b1b1b_1px,transparent_1px),linear-gradient(to_bottom,#1b1b1b_1px,transparent_1px)]">
        <div className="relative py-6 md:mt-28 flex flex-col-reverse lg:flex-row">
          <div className="p-4 md:w-2/3 xl:pl-20">
            <TypeAnimation
              className="lg:ml-16 mb-2 flex text-center font-poppins text-5xl font-semibold text-yellow-dark sm:text-6xl"
              cursor={true}
              repeat={Infinity}
              sequence={sequence}
              wrapper={"h1"}
            />

            <h2 className="text-2xl tracking-tighter pt-3 md:pl-16 lg:text-3xl xl:text-4xl">
              I'm a{" "}
              <span className="text-yellow-dark">Full Stack Developer </span>
              passionate about Vue.js, React.js and Spring Boot. I have
              developed several impactful projects for the Bolivian Catholic
              University (UCB), focusing on innovative systems that enhance
              academic and administrative efficiency. I thrive on solving
              complex problems and am dedicated to continuous learning and
              professional growth.
            </h2>
            <div className="lg:ml-20 xl:ml-0 flex flex-col items-center lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:w-full mt-8">
              <Button
                as="a"
                href="\CurriculumVitae_CarlosNina.pdf"
                download
                className="w-full md:w-auto lg:mt-0 text-2xl font-bold bg-yellow-light dark:bg-yellow-dark hover:text-black shadow-lg shadow-blue-light text-white py-4 px-6 lg:px-10 flex items-center justify-center relative transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
              >
                Download CV
              </Button>
              <div className="flex space-x-4 mt-4 lg:mt-0">
                <Button
                  as="a"
                  href="https://github.com/CarlosFULLHD"
                  target="_blank"
                  className="w-full md:w-auto text-2xl font-bold bg-white dark:bg-background-darker hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg text-black dark:text-white py-4 px-6 lg:px-10 flex items-center justify-center relative transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110"
                >
                  <img
                    src="github-142-svgrepo-com.svg"
                    alt="GitHub"
                    className="w-8 h-8 mr-2"
                  />
                  GitHub
                </Button>
                <Button
                  as="a"
                  href="https://www.linkedin.com/in/carlos-nina-reynaga/"
                  target="_blank"
                  className="w-full md:w-auto text-2xl font-bold bg-white dark:bg-background-darker hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg text-black dark:text-white py-4 px-6 lg:px-10 flex items-center justify-center relative transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110"
                >
                  <img
                    src="linkedin-color-svgrepo-com.svg"
                    alt="LinkedIn"
                    className="w-8 h-8 mr-2"
                  />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
          <div className="mx-auto rounded-xl text-center md:w-1/3 md:pr-8 lg:pr-20 max-w-md mb-4 lg:mb-0">
            <Image
              src="carlosnina_photo_blur.webp"
              alt="Carlos Nina Photo"
              width={100}
              height={100}
              className="w-full max-w-xs md:max-w-full aspect-square object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="w-10 mx-auto lg:mt-12 xl:mt-20">
          <button
            className="  h-12 text-white hover:text-primary"
            onClick={() => scrollIntoView("skills")}
          >
            <FaChevronDown className="animate-fade-in-down text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};
