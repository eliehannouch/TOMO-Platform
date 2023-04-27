import React, { useState } from "react";
import classes from "./stories.module.css";
import Card from "./Card/Card";
import education from "../assets/education.jpg";
import sustainability from "../assets/sustainability.jpg";
import peace from "../assets/peace_building.jpg";
import economic from "../assets/economic_development.jpg";
import humanRight from "../assets/human_rights.jpg";
import politics from "../assets/politics.jpg";
import { Link } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const stories = [
  {
    name: "Education",
    imagesrc: education,
    storyType:'education'
  },
  {
    name: "Sustainability",
    imagesrc: sustainability,
    storyType:'sustainability'
  },
  {
    name: "Peace Building",
    imagesrc: peace,
    storyType:'peace-building'
  },
  {
    name: "Economic<br>Development",
    imagesrc: economic,
    storyType:'economic-developement'
  },
  {
    name: "Human Rights",
    imagesrc: humanRight,
    storyType:'human-rights'
  },
  {
    name: "Politics",
    imagesrc: politics,
    storyType:'politics'
  },
];

const Stories = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post('https://tomo-backend.vercel.app/api/communication/newTopic',{
        newTopic: message
      })
      setMessage("")
      toast.success(
        "Thank you for sharing new topics that interest you. Our team will take it into consideration"
      ); 
    } catch (error) {
      
    }
  
  };
  return (
    <>
      {/* Title */}
      <div className={classes.banner}>
        <div className={classes.storiesTitle}>
          <h2>Stories</h2>
        </div>
        <div className={classes.description}>
          <p>
          </p>
        </div>
        <div className={classes.storiesContainer}>
          <div className={classes.allCards}>
            {stories.map((story, i) => (
              <div>
                <Link to={`/stories/${story.storyType}`}>
                  <Card key={i} name={story.name} imagesrc={story.imagesrc} />
                </Link>
              </div>
            ))}
          </div>
          <div className={classes.belowCards}>
            <div className={classes.heading1}>
              <h2>Do you know a new topic that interests you?Let us know!</h2>
            </div>
            <div className={classes.heading2}>
              <p>Our team values your input and will consider it.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={classes.searchBar}>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter the topic title / description"
                />
                <button type="submit">send</button>
              </div>
              <ToastContainer
                style={{
                  fontSize: "18px",
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
