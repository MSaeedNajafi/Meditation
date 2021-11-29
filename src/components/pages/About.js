import React, { useState } from "react";
import ScrollToTop from "../ScrollToTop";
import About from "../About";
import Navbar2 from "../Navbar/Navbar2";

function AboutMe() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar2 toggle={toggle} />
      <About />
    </>
  );
}

export default AboutMe;
