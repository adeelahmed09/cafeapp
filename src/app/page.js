"use client"
import AboutSection from "./components/home-components/AboutUsSection";
import HeroSection from "./components/home-components/HeroSection";

export default function Home() {
  return (
    <div className="w-screen min-h-screen">
      <HeroSection/>
      <AboutSection/>
    </div>
  );
}
