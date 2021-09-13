import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../SideBar";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSecction";
import { HomeObjOne, HomeObjTwo, HomeObjThree } from "../InfoSecction/Data";
import ServicesElements from "../Services";
import Footer from "../Footer";
import MeditateElements from "../HowToMeditate";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...HomeObjOne} />
      <ServicesElements />
      <InfoSection {...HomeObjTwo} />
      <MeditateElements />
      <InfoSection {...HomeObjThree} />

      <Footer />
    </>
  );
};

export default Home;
