import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ScrollToTop from "../ScrollToTop";
import Sidebar from "../SideBar";
import SignIn from "../Signin";

function SigninPage() {
  return (
    <>
      {/* <Sidebar />
      <Navbar /> */}
      <ScrollToTop />
      <SignIn />
      {/* <Footer /> */}
    </>
  );
}

export default SigninPage;
