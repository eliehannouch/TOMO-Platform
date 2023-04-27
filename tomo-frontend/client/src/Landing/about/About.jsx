import React from "react";
import logo from "../../assets/Tomo.jpg";
import classes from "./about.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" style={{ marginBottom: "50px", marginTop: "50px" }}>
      {/* Title */}
      <div className={classes.about}>
        <h2>
          <span>About Us</span>
        </h2>
      </div>
      <div className={classes.aboutContainer}>
        <div className={classes.aboutLogo}>
          <img src={logo} alt={"Tomo Logo"} />
        </div>
        <div className={classes.aboutDescription}>
          <div>
            <p>
            Tomo is a platform for dialogue and content from conflict and
              post-conflict regions. It was born as an idea of 11 professionals
              with different backgrounds who joined the Media for Peace
              fellowship, organized by Media Lab Bayern, dtec.bw and the
              Universität der Bundeswehr München. Behind the creation of TOMO there is a clear conviction: 
              the need to improve trust between the media and conflict-affected communities, through dialogue, 
              getting closer to communities, and listening to their needs and desires.
            </p>
          </div>

          <div className={classes.buttonMetho}>
            <Link to="/about">
              <button>Explore Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
