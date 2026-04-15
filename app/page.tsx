'use client'
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Writings from "@/components/Writings";
import Projects from "@/components/Projects";

export default function Home() {

  return (
    <>
      <HeroSection />
      <About />
      <Writings />
      <Projects />
    </>
  );
}
