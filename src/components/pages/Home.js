import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Navbar from "../Navbar";
import Sidebar from "../SideBar";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSecction";
// import { HomeObjOne, HomeObjTwo, HomeObjThree } from "../InfoSecction/Data";
import ServicesElements from "../Services";
import Footer from "../Footer";
import MeditateElements from "../HowToMeditate";
import Pricing from "../Pricing";
import img1 from "../../images/self/sitting.jpg";
import img4 from "../../images/svg-17.svg";
import img7 from "../../images/Slider/2.jpg";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [t] = useTranslation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const HomeObjOne = {
    id: "about",
    lightBg: false,
    lightText: false,
    lightTextDecs: true,
    topTitle: "",
    title: t("WhatisMeditation"),
    decsription: t("WhatisMeditationtxt"),
    buttonLabel: t("WhytoMeditate"),
    imgStart: false,
    img: img1,
    alt: "Mediatation",
    dark: true,
    primary: true,
    darkText: true,
    goto: "id2",
  };

  const HomeObjTwo = {
    id: "id2",
    lightBg: true,
    lightText: true,
    lightTextDecs: true,
    topTitle: "",
    title: t("WhytoMeditate"),
    decsription: t("WhytoMeditatetxt"),
    buttonLabel: t("learnmore"),
    imgStart: true,
    img: img7,
    alt: "Bank",
    dark: true,
    primary: true,
    darkText: false,
    goto: "id3",
  };

  const HomeObjThree = {
    id: "id3",
    lightBg: false,
    lightText: false,
    lightTextDecs: true,
    topTitle: "",
    title: t("startmed"),
    decsription: t("startmedtxt"),
    buttonLabel: "Contact Me",
    imgStart: false,
    img: img4,
    alt: "Mediatation",
    dark: true,
    primary: true,
    darkText: true,
    goto: "about",
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <MeditateElements />
      <ServicesElements />

      <InfoSection {...HomeObjThree} />

      <Pricing />

      <Footer />
    </>
  );
};

export default Home;
