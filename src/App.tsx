import React, { lazy, Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import ThreeBackground from "./components/ThreeBackground";


const NavBar = lazy(() => import("./components/NavBar"))
const HeroSection = lazy(() => import("./components/HeroSection"))
const NumberSection = lazy(() => import("./components/NumberSection"))
const ServiceSection = lazy(() => import("./components/ServiceSection"))
const WhyMe = lazy(() => import("./components/WhyMe"))
const ProjectsSection = lazy(() => import("./components/ProjectSection"))
const ContactSection = lazy(() => import("./components/contactSection"))

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <ThreeBackground></ThreeBackground>
      <div className="relative z-10">
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <LoadingSpinner />
            </div>
          }
        >
          <NavBar />
          <HeroSection/>
          <NumberSection/>
          <ServiceSection/>
          <WhyMe/>
          <ProjectsSection/>
          <ContactSection/>
          
        </Suspense>
      </div>
    </div>
  );
}