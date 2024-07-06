import React from "react";

type Props = {};

const Experience = (props: Props) => {
  return (
    <section className="px-4" id="experience">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4  text-yellow-dark px-4">
        Professional Experience
      </h2>

      <p className="text-xl max-w-2xl mx-auto">
        While I haven't yet worked in formal office settings, my experience
        comes from actively participating in substantial university projects and
        personal endeavors.
        <br />
        I excel at gathering requirements, communicating effectively, and
        presenting progress through agile sprints with internal clients (non-IT
        faculty and university authorities).
        <br />
        <br />
        <span className="font-bold">Thesis Management System:</span> As the team
        lead of four, I developed a comprehensive system that's currently in
        production, working extensively on both the backend and frontend
        aspects. I also managed the project using JIRA and Scrum methodologies
        over 6 sprints, ensuring efficient workflow and timely deliveries.
        <br />
        <br />
        <span className="font-bold">Job Fair Platform:</span> Contributed
        primarily to the backend system using Express.js, Vue.js and Mysql as a
        key member of a four-person team. Over the course of 5 weeks and 80
        hours of work, I received a commendation for outstanding performance on
        this project.
        <br />
        <br />
        Throughout my studies, I've also contributed to various other projects,
        applying security measures, JWT authentication, and backend development,
        continuously enhancing my skills through personal projects and learning
        initiatives.
      </p>
    </section>
  );
};

export default Experience;
