"use client";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DetailedCard from "@/components/DetailedCard";
import { Avatar, Button, Tooltip } from "@nextui-org/react";
import { ModulesSection } from "@/components/ModulesSection";
import Image from "next/image";

import PopUp from "@/components/PopUp";

import { HeroSection } from "@/components/HeroSection";
import FooterSection from "@/components/common/FooterSection";
import Experience from "@/components/Experience";
import ProjectsSection from "@/components/ProjectsSection";
import Education from "@/components/Education";
import Hobbies from "@/components/Hobbies";
import Resume from "@/components/Resume";
export default function Home() {
  return (
    <section className="flex flex-col ">
      <HeroSection />

      <ModulesSection />
      <Resume />

      <ProjectsSection />

      <FooterSection />
    </section>
  );
}
