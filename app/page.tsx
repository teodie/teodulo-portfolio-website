'use client'
import NavBAr from "@/components/NavBar";
import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Articles from "@/components/Articles";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme)').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }

  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = ''
    }
  }, [isDarkMode])

  return (
    <>
      <NavBAr isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HeroSection />
      <About />
      <Articles />
      <Projects />
      <Footer />
    </>
  );
}
