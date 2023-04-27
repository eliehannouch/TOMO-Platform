import React from "react";
import classes from "./methodology.module.css";
import diag2 from "../../assets/diag2.png";

import { Link } from "react-router-dom";

const MethodologyLanding = () => {
  return (
    <div>
      <div className={classes.title}>
        <h2>
          <span>Our Methodology</span>
        </h2>
        <div className={classes.methoContainer}>
          <div className={classes.methoImg}>
            <img src={diag2} alt={"Methodology"} />
          </div>
          <div className={classes.leftMethodology}>
            <div className={classes.paragraph}>
              <p>
                At Tomo, we enable communities to interact and have a
                constructive and futuristic dialogue through our design fiction
                workshops. Because these workshops are future-oriented,
                participants feel safe expressing their opinions. But at the
                same time, we can offer a space where people can learn, network,
                and get inspired.
              </p>
            </div>
            <div className={classes.buttonMetho}>
              <Link to="/methodology">
                <button>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologyLanding;
