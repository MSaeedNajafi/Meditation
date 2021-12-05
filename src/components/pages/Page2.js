import React, { useState } from "react";
import Sidebar2 from "../SideBar2/";
// import PageContentainer from "../contents/index";
import PageContentainer from "../Contents/index";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const Page2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar2 isOpen={isOpen} toggle={toggle} />
      <Navbar2 toggle={toggle} />
      <PageContentainer />
      <Footer />
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1>Page 2</h1>
      </div> */}
    </>
  );
};

export default Page2;
