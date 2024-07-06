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

  {
    title: "Feria del Empleo UCB",
    image:
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image.png",
    shortDescription: `The Feria del Empleo UCB project is designed to support students at Universidad Católica Boliviana (UCB) in their transition from university to the workforce by connecting them with potential employers through a virtual job fair platform.`,
    fullDescription: `The Feria del Empleo UCB project is designed to support students at Universidad Católica Boliviana (UCB) in their transition from university to the workforce by connecting them with potential employers through a virtual job fair platform. The platform allows institutions to present themselves and interact with students via video content, social media links, and Zoom meetings.`,
    keyPoints: [
      "View Institutions",
      "Institution Details",
      "Zoom Meeting Registration",
      "Event Calendar",
      "Manage Institutions ",
      "Manage Events",
    ],
    technologies: [
      "https://skillicons.dev/icons?i=vue",
      "https://static-00.iconduck.com/assets.00/vuetify-icon-1793x2048-xtqk92sz.png",
      "https://skillicons.dev/icons?i=express",
      "https://skillicons.dev/icons?i=mysql",
      "https://skillicons.dev/icons?i=docker",
    ],
    carouselImages: [
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-2.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-1.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-12.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-14.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-3.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-5.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-6.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-7.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-8.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-9.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-10.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-11.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-12.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-13.png",
    ],
    githubLink: "https://github.com/CarlosFULLHD/JobFairPlatform",
    demoLink: "https://jobfair.demo.com",
  },
  {
    title: "SmartPark - IoT Garage System",
    image:
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image.png",
    shortDescription:
      "An intelligent garage system utilizing IoT for real-time management and monitoring of parking spaces.",
    fullDescription: `SmartPark is an intelligent garage system that optimizes and automates real-time parking space management to enhance efficiency and security for users while providing statistical data for the university.
  
    Objective:
    Optimize and automate real-time parking space management to enhance efficiency and security for users while providing statistical data for the university.`,
    keyPoints: [
      "Complete and Automated Integration: Uses modern technologies like Raspberry Pi Pico W, Flutter, and Spring Boot.",
      "Flexible Authentication Methods: Supports code and license plate recognition for authentication.",
      "Intuitive Mobile Application: Provides a user-friendly interface for managing and monitoring parking spaces.",
      "Advanced Security Measures: Ensures secure access and management of parking spaces.",
      "Real-Time Monitoring: Offers continuous monitoring and updates about parking space availability.",
      "User-Friendly Interface: Facilitates easy interaction for users through a mobile app.",
    ],
    technologies: [
      "https://skillicons.dev/icons?i=spring",
      "https://skillicons.dev/icons?i=flutter",
      "https://skillicons.dev/icons?i=postgresql",
      "https://skillicons.dev/icons?i=raspberrypi",
      "https://skillicons.dev/icons?i=python",
      "https://skillicons.dev/icons?i=docker",
    ],
    carouselImages: [
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/DB.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-1.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-13.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-14.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-2.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-15.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-3.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-4.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-5.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-6.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-10.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-11.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-12.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-16.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-17.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-18.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-9.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-10.png",
    ],
    githubLink: "https://github.com/CarlosFULLHD/iot_garaje_inteligente",
    demoLink: "https://smartpark.demo.com",
  },
  {
    title:
      "Intelligent Parking Management System with Microservices - Spring Boot - Cloud",
    image:
      "https://github.com/CarlosFULLHD/spring-microservices/raw/main/imgs/1.jpg",
    shortDescription:
      "Optimize parking space management using IoT and AI to reduce search time, minimize traffic congestion, and decrease environmental impact.",
    fullDescription: `
      The Intelligent Parking Management System aims to optimize parking space management in urban areas using IoT technologies and AI algorithms. The project reduces the time spent searching for parking spots, minimizes traffic congestion, and decreases environmental impact through the use of sensors and voice recognition.
    `,
    keyPoints: [
      "Centralized configuration management with Config Server",
      "Service discovery and registration with Eureka Server",
      "Routing client requests with API Gateway",
      "Management of parking lots, users, reservations, and memberships with microservices",
    ],
    technologies: [
      "https://skillicons.dev/icons?i=spring",
      "https://skillicons.dev/icons?i=java",
      "https://skillicons.dev/icons?i=postgresql",
      "https://skillicons.dev/icons?i=docker",
    ],
    carouselImages: [
      "https://github.com/CarlosFULLHD/spring-microservices/raw/main/imgs/1.jpg",
      "https://github.com/CarlosFULLHD/spring-microservices/raw/main/imgs/2.jpg",
      "https://github.com/CarlosFULLHD/spring-microservices/raw/main/imgs/3.jpg",
      "https://github.com/CarlosFULLHD/spring-microservices/raw/main/imgs/4.jpg",
      "https://github.com/CarlosFULLHD/spring-microservices/raw/main/imgs/5.jpg",
    ],
    githubLink: "https://github.com/CarlosFULLHD/spring-microservices",
    demoLink: "",
  },
  {
    title: "Landing Page with Next JS",
    image:
      "https://github.com/CarlosFULLHD/personal-webpage/raw/main/readme-imgs/image-1.png",
    shortDescription:
      "A comprehensive platform for promoting and selling the 'Libertad Digital' course with features enhancing user engagement and conversions.",
    fullDescription: `
      This landing page is designed to provide a comprehensive platform for promoting and selling the 'Libertad Digital' course. The site includes various features aimed at enhancing user engagement and driving conversions, following the principles outlined in Alex Hormozi's '100M Offers' and Russell Branson's 'Dotcom Secrets.'
    `,
    keyPoints: [
      "Interactive Pop-Ups for targeted messaging",
      "Author Section for social validation",
      "Course Points and Features breakdown",
      "Bonuses Section to add value",
      "Product Comparison Section for clear advantages",
      "FAQs Section to address common questions",
      "Guarantee for user security",
      "Checkout page integration",
      "Contact Modal for collaboration",
      "Form for quizzes and feedback",
      "Newsletter Page for subscriptions",
    ],
    technologies: [
      "https://skillicons.dev/icons?i=nextjs",
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=tailwind",

      "https://nextui.org/apple-touch-icon.png",
      "https://avatars.githubusercontent.com/u/139895814?s=280&v=4",
      "https://skillicons.dev/icons?i=vercel",
      "https://skillicons.dev/icons?i=aws",
    ],
    carouselImages: [
      "https://github.com/CarlosFULLHD/personal-webpage/raw/main/readme-imgs/image-1.png",
      "https://github.com/CarlosFULLHD/personal-webpage/raw/main/readme-imgs/image-2.png",
      "https://github.com/CarlosFULLHD/personal-webpage/raw/main/readme-imgs/image-5.png",
      "https://github.com/CarlosFULLHD/personal-webpage/raw/main/readme-imgs/image-6.png",
      "https://github.com/CarlosFULLHD/personal-webpage/raw/main/readme-imgs/image-7.png",
      "https://github.com/CarlosFULLHD/personal-webpage/raw/main/readme-imgs/image-8.png",
      "https://github.com/CarlosFULLHD/personal-webpage/raw/main/readme-imgs/image-9.png",
      "https://github.com/CarlosFULLHD/personal-webpage/raw/main/readme-imgs/image-10.png",
    ],
    githubLink: "https://github.com/CarlosFULLHD/personal-webpage",
    demoLink: "",
  },
  {
    title: "Studio Cuisine Restaurant Menu Project",
    image:
      "https://github.com/CarlosFULLHD/Proyecto-Sis-Info/raw/master/imgs/image.png",
    shortDescription:
      "Interactive virtual menu for customers and management platform for Studio Cuisine restaurants.",
    fullDescription: `
      Studio Cuisine is a restaurant that manages different lines of food within a dark kitchen, including Combi (fast food), Máito Chifa (Peruvian Chifa), Lego Burger (customized burgers), Salchipapus (salchipapas), and Pocho el Pollo (fried chicken). This project provides a website for users to explore menus, place orders, and for administrators to manage products and orders.
    `,
    keyPoints: [
      "Interactive virtual menu for various food lines",
      "Order placement and management",
      "User and admin registration and management",
      "Shopping cart for order review and modification",
    ],
    technologies: [
      "https://skillicons.dev/icons?i=mysql",
      "https://skillicons.dev/icons?i=flask",
      "https://skillicons.dev/icons?i=python",
      "https://skillicons.dev/icons?i=html",
      "https://skillicons.dev/icons?i=css",
      "https://skillicons.dev/icons?i=docker",
    ],
    carouselImages: [
      "https://github.com/CarlosFULLHD/Proyecto-Sis-Info/raw/master/imgs/image.png",
      "https://github.com/CarlosFULLHD/Proyecto-Sis-Info/raw/master/imgs/image-1.png",
      "https://github.com/CarlosFULLHD/Proyecto-Sis-Info/raw/master/imgs/image-2.png",
      "https://github.com/CarlosFULLHD/Proyecto-Sis-Info/raw/master/imgs/image-3.png",
      "https://github.com/CarlosFULLHD/Proyecto-Sis-Info/raw/master/imgs/image-4.png",
      "https://github.com/CarlosFULLHD/Proyecto-Sis-Info/raw/master/imgs/image-5.png",
      "https://github.com/CarlosFULLHD/Proyecto-Sis-Info/raw/master/imgs/image-6.png",
      "https://github.com/CarlosFULLHD/Proyecto-Sis-Info/raw/master/imgs/image-7.png",
      "https://github.com/CarlosFULLHD/Proyecto-Sis-Info/raw/master/imgs/image-8.png",
      "https://github.com/CarlosFULLHD/Proyecto-Sis-Info/raw/master/imgs/image-9.png",
    ],
    githubLink: "https://github.com/CarlosFULLHD/Proyecto-Sis-Info",
    demoLink: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="m-0  self-center mt-8" id="projects">
      <div className="mx-auto p-1 sm:p-2 md:p-4 lg:p-8 rounded-lg">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4 text-yellow-dark text-center">
            Key Projects:
          </h2>
          <div className="mx-4 grid grid-cols-1 gap-4 items-center lg:grid-cols-2 max-w-[1200px] md:mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        {/* <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Other Projects:</h2>
          <div className="grid grid-cols-1 gap-4 items-center lg:grid-cols-2 max-w-[1200px] mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
