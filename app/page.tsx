"use client";
import React, { useState, useEffect, useRef } from "react";

import { HeroSection } from "@/components/HeroSection";
import FooterSection from "@/components/common/FooterSection";

import MasitasSection from "@/components/MasitasSection";

export default function Home() {
  return (
    <section className="flex flex-col ">
      <HeroSection />
      <MasitasSection />
      <FooterSection />
    </section>
  );
}
