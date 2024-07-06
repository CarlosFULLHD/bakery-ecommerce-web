import Image from "next/image";
import { ReactElement } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

import { Timeline, TimelineItem } from "@/components/Timeline";
import { monthsPassed } from "@/utils/monthPasses";

function Resume(): ReactElement {
  const renderCompanyLogo = (company: string): ReactElement => {
    return (
      <img
        alt={`${company} Logo`}
        height={56}
        src="https://iconape.com/wp-content/files/zh/194352/png/universidad-catolica-boliviana-san-pablo.png"
        width={56}
      />
    );
  };

  const currentDate: Date = new Date();
  const currentYear: number = currentDate.getFullYear();
  const currentMonth: string = currentDate.toLocaleDateString("en-US", {
    month: "short",
  });

  return (
    <section id="experience" className="py-16 font-poppins">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-yellow-dark px-4">
        Experience
      </h2>
      <Timeline>
        <TimelineItem
          isRight
          date="Feb 2024 - Jun 2024"
          icon={renderCompanyLogo("UCB")}
          monthPasses={monthsPassed("Feb", 2024, "Jun", 2024)}
        >
          <h3 className="text-2xl font-bold text-white">
            Jr. Full Stack Developer and Team Leader
          </h3>

          <h4 className="text-xl font-semibold text-blue-dark">
            <a
              className="flex items-center gap-1 underline"
              href="https://github.com/CarlosFULLHD/thesis_management_system"
              target="_blank"
            >
              Thesis Management System <HiOutlineExternalLink />
            </a>
          </h4>

          <div className="mt-4 text-base text-white">
            <p>
              <strong>Project Objective:</strong> Develop an integrated
              information system prototype for efficiently managing the thesis
              workshops for Systems Engineering, facilitating the administration
              of registrations, tutor assignments, proposal reviews, and student
              progress tracking.
            </p>
            <ul className="list-disc ml-5">
              <li>
                Led a team of four to develop a comprehensive thesis management
                system.
              </li>
              <li>
                Contributed to both frontend and backend development, ensuring a
                robust and scalable application.
              </li>
              <li>
                Utilized Next.js for the frontend and Spring Boot for the
                backend.
              </li>
              <li>
                Managed project tasks using JIRA and Scrum methodologies over
                six sprints.
              </li>
              <li>
                Gathered and analyzed client requirements to ensure the system
                met their needs.
              </li>
            </ul>
          </div>
        </TimelineItem>

        <TimelineItem
          date="Mar 2023 - Jun 2023"
          icon={renderCompanyLogo("UCB")}
          monthPasses={monthsPassed("Sep", 2023, "Dec", 2023)}
        >
          <h3 className="text-2xl font-bold text-white">
            Jr. Backend Developer
          </h3>

          <h4 className="text-xl font-semibold text-blue-dark">
            <a
              className="flex items-center gap-1 underline"
              href="https://github.com/CarlosFULLHD/JobFairPlatform"
              target="_blank"
            >
              Job Fair Platform <HiOutlineExternalLink />
            </a>
          </h4>

          <div className="mt-4 text-base text-white">
            <p>
              <strong>Project Objective:</strong> The "Feria del Empleo UCB"
              project supports students at UCB in their transition from
              university to the workforce by connecting them with potential
              employers through a virtual job fair platform. The platform allows
              institutions to present themselves and interact with students via
              video content, social media links, and Zoom meetings.
            </p>
            <ul className="list-disc ml-5">
              <li>
                Contributed to the backend development using Express.js,
                ensuring robust server-side functionality.
              </li>
              <li>
                Assisted with frontend development using Vue.js, creating a
                responsive and user-friendly interface.
              </li>
              <li>
                Coordinated project tasks and collaborated closely with team
                members to ensure smooth execution.
              </li>
              <li>
                Successfully delivered the project and received commendation for
                outstanding performance.
              </li>
            </ul>
          </div>
        </TimelineItem>

        <TimelineItem
          isRight
          date="Jan 2020 - Present"
          icon={renderCompanyLogo("UCB")}
          monthPasses={monthsPassed("Jan", 2020, currentMonth, currentYear)}
        >
          <h3 className="text-2xl font-bold text-white">
            Education: Systems Engineering Student
          </h3>

          <h4 className="text-xl font-semibold text-blue-dark">
            <a
              className="flex items-center gap-1 underline"
              href="https://www.ucb.edu.bo"
              target="_blank"
            >
              Bolivian Catholic University (UCB) <HiOutlineExternalLink />
            </a>
          </h4>

          <div className="mt-4 text-base text-white">
            <ul className="list-disc ml-5">
              <li>
                Currently in the final year of my Systems Engineering studies.
              </li>
              <li>
                Participated in various internal university projects, honing
                skills in Web Development, Database Management, Software
                Engineering, and Security.
              </li>
              <li>
                Proficient in frontend technologies like React, Next.js,
                TypeScript, Tailwind CSS, and Vue.js.
              </li>
              <li>
                Experienced with backend technologies like Spring Boot (Java),
                PostgreSQL, MySQL, and Express.js.
              </li>
              <li>
                Skilled in using Docker and Jenkins for containerization and
                automation during development.
              </li>
              <li>
                Deployed applications on Netlify and managed VPC configurations
                using a VPS for backend and database deployment.
              </li>
              <li>
                Utilized project management tools like JIRA and Scrum
                methodologies to ensure efficient workflow and timely
                deliveries.
              </li>
            </ul>
          </div>
        </TimelineItem>
      </Timeline>
    </section>
  );
}

export default Resume;
