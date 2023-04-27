import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import classes from "./About.module.css";
import logo from "../assets/TomoLogo.png";
import Team from "./team/Team";

const About = () => {
  return (
    <>
      <div id="about">
      <div className={classes.about}>
             <h3>
              <span>About Us</span>
            </h3> 
          </div>
        <div className={classes.aboutContainer}>
          <div className={classes.aboutLogo}>
            <img src={logo} alt={"Tomo Logo"} />
          </div> 

          <div className={classes.aboutDescription}>
          <p>People living in conflict or post-conflict areas find it increasingly difficult to access a safe space for constructive dialogue that can contribute to peacebuilding and reconciliation. Some feel threatened and others feel that dialogue is not worthwhile in sometimes polarised communities. </p>

<p>In the midst of these circumstances, the media and journalists have a key role to play: in addition to portraying communities' efforts and proposals to resolve the conflict, they can also be facilitators of these dialogues. However, journalists have experienced a rapid decline in trust over the last two decades. </p>

<p>This is why Tomo was created as a platform for content from conflict and post-conflict regions, born out of dialogue, listening, and sharing experiences. But we don't do it in a conventional way, on the contrary: we use the methodology of design fiction so that people interact in a more constructive and futuristic way, through our workshops. </p>

<p>The use of design fiction allows participants to explore different scenarios and ideas without feeling constrained by the limitations of the present. The involvement of journalists as facilitators is also important. By listening to and engaging with diverse voices, journalists can gain a deeper understanding of the challenges and opportunities facing conflict-affected communities and can work to ensure that their reporting is more accurate, balanced, and representative. </p>

<p>Tomo was born as an idea of 11 professionals from different fields who joined the Media for Peace fellowship, organised by Media Lab Bayern, dtec.bw and the Universität der Bundeswehr München. Our goal was to develop ways to support journalism in Lebanon and Afghanistan that de-escalate and promote peace. </p>



          </div>
        </div>
      </div>
      <Team />
    </>
  );
};

export default About;

{
  /* <div className={classes.aboutLogo}>
            <img src={logo} alt={"Tomo Logo"} />
          </div> */
}
