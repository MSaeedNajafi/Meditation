import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../SideBar";
// import PageContentainer from "../contents/index";
import PageContentainer from "../Contents/index";
import Navbar2 from "../Navbar/Navbar2";

const Page2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar2 toggle={toggle} />
      <PageContentainer />
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
