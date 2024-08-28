import React from "react";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import "../../index.css"
import AboutImg from "./about-img.png";

function About() {
  return (
    <>
      <Navbar />
      <div className="page-heading">About</div>
      <img src={AboutImg} className="main-image" />
      <Footer/>
    </>
  );
}

export default About;
