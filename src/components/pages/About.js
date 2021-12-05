import React, { useState } from "react";
import ScrollToTop from "../ScrollToTop";
import About from "../About";
import Navbar2 from "../Navbar/Navbar2";
import Sidebar2 from "../SideBar2";
import Footer from "../Footer";

function AboutMe() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar2 isOpen={isOpen} toggle={toggle} />
      <Navbar2 toggle={toggle} />
      <About />
      <Footer />
    </>
  );
}

export default AboutMe;
