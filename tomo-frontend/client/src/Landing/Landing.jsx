import React from "react";
import classes from "./landing.module.css";
import MethodologyLanding from "./MethodologyLanding/MethodologyLanding";
import About from "./about/About";
import Contact from "./contact/Contact";
import FirstContainer from "./Carousel/FirstContainer";

const Landing = () => {
  return (
    <div className={classes.landingContainer}>
      <FirstContainer />
      <MethodologyLanding />
      <About />
      <Contact />
    </div>
  );
};

export default Landing;
