import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./join.module.css";
import asFacilitator from "../../assets/microphone (1).png";
import asParticipant from "../../assets/part.png";
import FAQ from "./FAQ";

const nextStory = [
  {
    imageSrc: asFacilitator,
    buttonText: "As a facilitator",
    href: "/asFacilitator",
  },
  {
    imageSrc: asParticipant,
    buttonText: "As a participant",
    href: "/asParticipant",
  },
];

const askedQuestion = [
  {
    question: "Where does the platform content come from?",
    answer:
      "Our content comes from the design fiction workshops we do with journalists and audiences in conflict and post-conflict zones. On the one hand, there is the fiction content created by the participants, which is one of the results of the workshops and which we call “artifacts”. On the other hand, we have the non-fiction content, developed by the journalists who play the facilitator role and after the meeting decide to develop a story, character, solution, or problem of their interest.",
  },
  {
    question: "What is design fiction?",
    answer:
      "Design fiction is a creative methodology of using narrative and speculative design to imagine and explore possible futures. Although it is a design-science fiction practice, we are interested in its aim to provoke discussion and debate about the impact of particular events or developments, through the creation of artifacts. In our case, we try to talk about current issues in conflict and post-conflict regions and then imagine solutions and speculative futures that contribute to peacebuilding. Sometimes communities in these areas find it difficult to express their views or feel threatened by them, but if we talk about what they experience with a view to the future, we can create a safe space for dialogue.",
  },
  {
    question: "What is an artifact?",
    answer:
      "The artifacts are fictional content created by the participants, with the help of the journalists-facilitators, which gives us a clue about the events they are experiencing in their communities and the speculative futures they imagine. These artifacts are one of the outputs of our workshops and are then published in Tomo, in the Imaginary Futures section. They take many forms, including short stories, videos, interactive installations, and physical prototypes.",
  },
  {
    question: "Can journalism and design fiction really come together?",
    answer:
      "Yes, in fact, we use the Design Fiction methodology to dialogue with our audiences, to create content that shows their desires, solutions they imagine, and discussions about current problems. In addition, we extract information to develop non-fiction stories to feed our platform",
  },
];
const JoinUs = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={classes.joinContainer}>
        {/* Title */}
        <div className={classes.title}>
          <h2>Be Part of the Next Story</h2>
        </div>
        <div className={classes.allNextStory}>
          {nextStory.map((story, i) => (
            <div key={i} className={classes.singleStory}>
              <div className={classes.imgNextStory}>
                <img src={story.imageSrc} alt="Next Story" />
              </div>
              <div className={classes.buttonStory}>
                <Link to={story.href}>
                  <button>{story.buttonText}</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Frequently Asked Question */}
        <div className={classes.frequentlyTitle}>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className={classes.askedQuestions}>
          {askedQuestion.map((quest, i) => (
            <FAQ quest={quest.question} key={i} answer={quest.answer} />
          ))}
        </div>
      </div>
    </>
  );
};

export default JoinUs;
