import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Thesis Management System",
    image:
      "https://github.com/CarlosFULLHD/thesis_management_system/raw/main/imgs/image.png",
    shortDescription: `The Thesis Management System is designed to support both students and faculty throughout the thesis process.`,
    fullDescription: `The Thesis Management System is designed to support both students and faculty throughout the thesis process. It includes a range of features to facilitate information dissemination, tutor management, project submissions, and progress tracking. The system ensures secure access for users and provides comprehensive tools for managing thesis-related activities. `,

    keyPoints: [
      "News and Announcements",
      "Library Search Tool",
      "Tutor Management",
      "Teacher Registration Management",
      "Student Registration Management",
      "Dropout and Withdrawal Management",
      "Thesis Proposal Review",
      "Tutor and Reviewer Assignment",
      "Task Management and Progress Tracking",
      "Final Document Generation",
      "User Management",
    ],
    technologies: [
      "https://skillicons.dev/icons?i=nextjs",
      "https://skillicons.dev/icons?i=react",
      "https://nextui.org/apple-touch-icon.png",
      "https://avatars.githubusercontent.com/u/139895814?s=280&v=4",
      "https://skillicons.dev/icons?i=typescript",
      "https://skillicons.dev/icons?i=tailwind",
      "https://skillicons.dev/icons?i=spring",
      "https://static-00.iconduck.com/assets.00/swagger-icon-512x512-halz44im.png",
      "https://skillicons.dev/icons?i=postgresql",
      "https://skillicons.dev/icons?i=docker",
    ],
    carouselImages: [
      "https://github.com/CarlosFULLHD/thesis_management_system/raw/main/imgs/image-1.png",
      "https://github.com/CarlosFULLHD/thesis_management_system/raw/main/imgs/image-2.png",
      "https://github.com/CarlosFULLHD/thesis_management_system/raw/main/imgs/image-10.png",
      "https://github.com/CarlosFULLHD/thesis_management_system/raw/main/imgs/image-11.png",
      "https://github.com/CarlosFULLHD/thesis_management_system/raw/main/imgs/image-4.png",
      "https://github.com/CarlosFULLHD/thesis_management_system/raw/main/imgs/image-9.png",
    ],
    githubLink: "https://github.com/CarlosFULLHD/thesis_management_system",
    demoLink: "",
  },

];

export const ProjectsSection = () => {
  return (
    <section className="m-0  self-center mt-8" id="projects">
      <div className="mx-auto p-1 sm:p-2 md:p-4 lg:p-8 rounded-lg">
        <div className="mb-8">
          
          <div className="mx-2 grid grid-cols-2 gap-2 items-center lg:grid-cols-2 max-w-[1200px] md:mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
