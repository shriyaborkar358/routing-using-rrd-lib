import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import HomeImg from "./home-img.png";
import "../../index.css"

function Home() {
  return (
    <>
      <Navbar />
      <div className="page-heading">Home</div>
      <img src={HomeImg} className="main-image" />
      <Footer/>
    </>
  );
}

export default Home;
