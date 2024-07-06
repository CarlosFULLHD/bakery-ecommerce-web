// FooterComponent.tsx
import React from "react";
import IframeNewsletter from "@/components/common/IframeNewsletter";
import { Logo } from "../icons";
import { Link } from "@nextui-org/link";
import { Twitter, Youtube } from "lucide-react";
import { Button } from "@nextui-org/button";
// Asumiendo que tienes un componente Logo

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-custom-background text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-10 lg:mx-16"></div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:w-full mt-8">
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
        <hr className="my-8" />
        <span className="block text-sm text-gray-300 sm:text-center ">
          © 2024 Carlos Nina.
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
