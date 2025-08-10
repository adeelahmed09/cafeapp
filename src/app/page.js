"use client"
import AboutSection from "./components/home-components/AboutUsSection";
import HeroSection from "./components/home-components/HeroSection";
import MenuPreview from "./components/home-components/MenuPreview";
import Testimonials from "./components/home-components/ReviewSection";

export default function Home() {
  return (
    <div className="w-screen min-h-screen">
      <HeroSection/>
      <AboutSection/>
      <MenuPreview/>
      <Testimonials/>
    </div>
  );
}
