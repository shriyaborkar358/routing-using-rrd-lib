import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import ContactImg from "./contact-img.png";
import "../../index.css"

function Contact() {
  return (
    <>
      <Navbar />
      <div className="page-heading">Contact</div>
      <img src={ContactImg} className="main-image" />
      <Footer/>
    </>
  );
}

export default Contact;
