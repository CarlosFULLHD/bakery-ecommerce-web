import React from "react";
import { Image } from "@nextui-org/react";

type Props = {};

export default function Education({}: Props) {
  return (
    <section className="px-4">
      <h2
        className="text-4xl lg:text-5xl font-bold text-center mb-4 text-yellow-dark px-4"
        id="education"
      >
        Education
      </h2>

      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Image
            src="https://academico.ucb.edu.bo/AcademicoNacional/assets/logo-nacional.png"
            alt="UCB Logo"
            className="w-52 h-24 object-contain"
          />
        </div>
        <p className="text-xl mb-4">
          <strong>Student of Systems Engineering at UCB, 8th Semester</strong>{" "}
          (One year away from graduation)
        </p>

        <h3 className="text-2xl font-bold mb-2">Recognitions</h3>
        <ul className="list-disc ml-6 text-lg mb-4">
          <li>
            Internship letter for SmartPark IoT Garage System project in 2023
            (30 hours of work)
          </li>
          <li>
            Internship letter for Job Fair Platform project for intern
            authorities in 2023 (30 hours of work)
          </li>
        </ul>

        <h3 className="text-2xl font-bold mb-2">English Proficiency</h3>
        <ul className="list-disc ml-6 text-lg">
          <li>Certified B1 Level at Universidad Católica de San Pablo</li>
          <li>
            Actively improving through reading documentation, watching videos,
            and speaking with natives
          </li>
        </ul>
      </div>
    </section>
  );
}
