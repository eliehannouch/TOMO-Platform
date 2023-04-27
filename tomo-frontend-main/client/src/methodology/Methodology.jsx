import React, { useEffect } from "react";
import classes from "./methodology.module.css";
import firstImage from "../assets/megaphone.png";
import secondImage from "../assets/brainstorm.png";
import thirdImage from "../assets/workshop.png";
import fourthImage from "../assets/writing.png";
import fifthImage from "../assets/journalist.png";

import { Link } from "react-router-dom";

const steps = [
  {
    image: firstImage,
    title: "Starting an open call",
    description:
      "Our team makes a call through different channels to invite journalists and their audiences in conflict and post-conflict zones to a design fiction workshop in which we think together and discuss solutions for a peaceful future. ",
  },
  {
    image: secondImage,
    title: "Preparing the workshops",
    description:
      "Although our team organises the workshops, the facilitators are actually the journalists who have registered for the open call. Before the meeting starts, they are trained in the methodology of design fiction and also in the art of mediating and facilitating. It is in our interest that journalists develop new skills that will enable them to dialogue with their audiences.",
  },
  {
    image: thirdImage,
    title: "Running the workshops",
    description:
    "Then comes the workshop, which can be virtual or in person, depending on the security situation. Through different activities, constructive and diverse dialogue is promoted among participants about the challenges currently facing their communities and brainstorming on possible solutions.     "
  },
  {
    image: fourthImage,
    title: "Creating the fictional artifacts",
    description:
      "After a fruitful dialogue and the facilitation of the journalist, one of the workshop's aims is the creation of an artifact, a fictional content created by the participants. The artifact should promote a solution that contributes to a better future and then is published on our platform in the Imaginary Futures section.",
  },

  {
    image: fifthImage,
    title: "Preparing and publishing the non fictional content",
    description:
    "Although the methodology of the workshop is design fiction, this does not mean that one of the central themes in discussions about what is currently happening in the communities. For this reason, once the workshops are over, the facilitating journalists will have the opportunity to investigate issues, stories or characters that have caught their attention in order to develop stories that will later be published as non-fiction content in Tomo in the Stories section. "
  },
];

const Methodology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.methodologyContainer}>
      <div className={classes.bannerMethodology}>
        {/* <img src={methodology} alt="methodology" /> */}
        <h2><span>Our Methodology</span> </h2>
      </div>
      {steps.map((step, i) =>
        i % 2 === 0 ? (
          <div className={classes.firstStep} key={i}>
            <div className={classes.firstImg}>
              <img src={step.image} alt="first Image" />
            </div>
            <div className={classes.right}>
              <div className={classes.title}>
                <h1>{step.title}</h1>
              </div>
              <div className={classes.underTitle}>
                <p>
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.SecondStep} key={i}>
            <div className={classes.right}>
              <div className={classes.title}>
              <h1>{step.title}</h1>
              </div>
              <div className={classes.underTitle}>
                <p>
                {step.description}
                </p>
              </div>
            </div>
            <div className={classes.firstImg}>
              <img src={step.image} alt="second Image" />
            </div>
          </div>
        )
      )}
      <div className={classes.beforeFooter}>
        <p>
        Interested in the stories our journalists uncovered? Click here:{" "}
        </p>
        <div className={classes.buttonStory}>
          <Link to={'/stories'}>
          <button>See the stories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
