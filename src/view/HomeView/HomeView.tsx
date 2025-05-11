import React from "react";
import Hero from "@/view/HomeView/components/Hero";
import Features from "./components/Features";
import Timeline from "./components/Timeline";

export default function HomeView() {
  return (
    <main className="flex flex-col items-center gap-9">
      <Hero />
      <Features />
      <Timeline />
    </main>
  );
}
