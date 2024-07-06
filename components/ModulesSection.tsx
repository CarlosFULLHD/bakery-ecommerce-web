import DetailedCard from "./DetailedCard";

const frontendCards = [
  {
    id: 1,
    title: "Next.js, React.js",
    icon: "next-js.svg",
    description:
      "Extensive experience in building dynamic web applications using Next.js, React.js withTypeScript. ",
    lists: `
      - Projects: Thesis Management System, Landing page with Next js, (this Portfolio) 
      - Consuming REST API endpoints
      - State management
      - Code Modularization
      - JWT + RBAC
      - Session management
    `,
  },
  {
    id: 2,
    title: "Vue.js",
    icon: "vue-js.svg",
    description:
      "Proficient in developing user interfaces using Vue.js 2 and 3. Experienced in building scalable and maintainable web applications",
    lists: `
      - Projects: Job Fair Platform
      - Vue.js 2 and 3
      - Consuming REST API endpoints
      - State management with Pinia
    `,
  },
  {
    id: 3,
    title: "TypeScript",
    icon: "typescript.svg",
    description:
      "Solid understanding of TypeScript for enhancing JavaScript with static types. Experienced in integrating TypeScript with both React and Vue.js, improving code quality and maintainability. Proficient in using TypeScript for type safety, interfaces, and generics.",
    lists: `
      - Basic TypeScript integration
      - Type safety and interfaces
      - Usage in React and Vue.js projects
      - Improving code quality and maintainability
    `,
  },
  {
    id: 4,
    title: "Tailwind CSS",
    icon: "tailwind-svgrepo-com.svg",
    description:
      "Skilled in using Tailwind CSS to create responsive and visually appealing user interfaces. Capable of styling applications from scratch and improving existing styles for better user experience.",
    lists: `
      - Responsive design
      - CSS styling from scratch
      - Dark and Light mode
    `,
  },
];

const backendCards = [
  {
    id: 5,
    title: "Spring Boot (Java)",
    icon: "spring.svg",
    description:
      "Proficient in developing robust backend systems with Spring Boot. Experience includes building REST APIs, implementing layered architecture, and securing endpoints with JWT tokens and Spring Security. Currently expanding knowledge in microservices.",
    lists: `
      - REST API Best Practices, Pagination, Sort, Filter, security
      - Layered Architecture
      - Spring Security with JWT Tokens and RBAC
      - Clear structure: High Cohesion and Loose Coupling
      - Password encryption
      - Handling errors and return standard error codes
      - Learning Spring Cloud...
    `,
  },
];

const devopsCards = [
  {
    id: 7,
    title: "Docker",
    icon: "docker-svgrepo-com.svg",
    description:
      "Expertise in using Docker for containerizing applications, running local databases, and creating Docker Compose files for microservices architecture. Skilled in building and managing Docker images.",
    lists: `
      - Running local project databases
      - Creating Docker Compose files
      - Managing Docker images
    `,
  },
  {
    id: 8,
    title: "Jenkins",
    icon: "jenkins-svgrepo-com.svg",
    description:
      "Experienced in setting up CI/CD pipelines using Jenkins. Developed pipelines for Spring Boot and Next.js applications, with deployments on Tomcat and Netlify.",
    lists: `
      - CI/CD pipeline creation
      - Deployments on Tomcat and Netlify
    `,
  },

  {
    id: 9,
    title: "AWS",
    icon: "aws-svgrepo-com.svg",
    description:
      "Experience in using AWS services for enhancing backend functionality, scalability, and reliability. Skilled in deploying and managing applications using various AWS tools and services.",
    lists: `
      - Amazon S3: Storing and retrieving data with high durability and availability
      - Amazon Aurora: Managing SQL databases with enhanced performance and availability
      - CloudFront CDN: Distributing content globally with low latency
    `,
  },
  {
    id: 10,
    title: "Deployments",
    icon: "server-minimalistic-svgrepo-com.svg",
    description:
      "Proficient in deploying applications on various platforms including Vercel, Netlify, and AWS. Knowledgeable in setting up automated CI/CD integration and deploying applications on VPS like Railway with NGINX for reverse proxy.",
    lists: `
      - Deployments on Vercel, Netlify, and AWS
      - Automated CI/CD integration
      - Deploying applications on VPS
      - Using NGINX for reverse proxy
    `,
  },
];

const Learning = [
  {
    id: 10,
    title: "React Query, Spring Cloud",
    icon: "https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fh3f26p0bsp79ayvkv8k4.png",
    description: "",
    lists: `- React Query: State and cache management library for React.js
- Spring Cloud`,
  },
];

export const ModulesSection = () => {
  return (
    <section id="skills" className="m-0 lg:w-full ">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-yellow-dark px-4">
        Technical skills:
      </h2>
      <div className="mx-auto max-w-[1024px] lg:max-w-6xl p-1 sm:p-2 md:p-4 lg:p-8 rounded-lg">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 lg:text-3xl text-yellow-dark px-4">
            Frontend:
          </h2>
          <div className="grid grid-cols-1 gap-1 m-0 lg:grid-cols-2 ">
            {frontendCards.map((card) => (
              <DetailedCard
                key={card.id}
                title={card.title}
                icon={card.icon}
                description={card.description}
                lists={card.lists}
              />
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 lg:text-3xl text-yellow-dark px-4">
            Backend:
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {backendCards.map((card) => (
              <DetailedCard
                key={card.id}
                title={card.title}
                icon={card.icon}
                description={card.description}
                lists={card.lists}
              />
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 lg:text-3xl text-yellow-dark px-4">
            DevOps:
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
            {devopsCards.map((card) => (
              <DetailedCard
                key={card.id}
                title={card.title}
                icon={card.icon}
                description={card.description}
                lists={card.lists}
              />
            ))}
          </div>
        </div>
        {/* <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 lg:text-3xl text-yellow-dark px-4">
            Currently Learning:
          </h2>
          <div className="grid grid-cols-1 ">
            {Learning.map((card) => (
              <DetailedCard
                key={card.id}
                title={card.title}
                icon={card.icon}
                description={card.description}
                lists={card.lists}
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};
