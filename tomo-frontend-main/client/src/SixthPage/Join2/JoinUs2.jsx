import React, { useState } from "react";
import classes from "./join2.module.css";
import confirm from "../../assets/confirm2.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const whyQuestion = [
  {
    name: "Access to communities in conflict and post-conflict regions in a different way.",
  },
  {
    name: "Development of new skills, such as promoting, mediating and guiding dialogues.",
  },
  {
    name: "Learning design fiction methodology.",
  },
  {
    name: "Diversification of sources and access to topics you may not have known about.    ",
  },
  {
    name: "Opportunity to publish your content on our platform, in the format of your choice.     ",
  },
];

const JoinUs2 = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    profession: "",
    organization: "",
    hearTOMO: "",
    areas: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        fullName: form.name,
        email: form.email,
        profession: form.profession,
        organization: form.organization,
        hearAboutTomo: form.hearTOMO,
        areas: form.areas,
      };
      const data = await axios.post(
        "https://tomo-backend-l18z.vercel.app/api/facilitate/newfacilitator",
        formData
      );
      setForm({
        name: "",
        email: "",
        profession: "",
        organization: "",
        hearTOMO: "",
        areas: "",
      });
      toast.success(
        "Your request has been delivered, we will get back to you shortly",
        {
          position: "top-right",
        }
      );
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className={classes.joinContainer2}>
        <div className={classes.title1}>
          <h2>Why should you join TOMO as a facilitator ?</h2>
        </div>
        <div className={classes.allAnswers}>
          {whyQuestion.map((question, i) => (
            <div className={classes.rowAnswer}>
              <div className={classes.icon}>
                <img src={confirm} alt="confirm" />
              </div>
              <div className={classes.answerText}>{question.name}</div>
            </div>
          ))}
        </div>
        <div className={classes.becomeTitle}>
          <h2>Want to become a facilitator ?</h2>
        </div>
        <div className={classes.subBecome}>
          <p>
            Please fill the following application and our <br /> team will get
            back to you
          </p>
          <div className={`${classes.container} ${classes.contact__container}`}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="What is your fullName"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="What is your email?"
                required
              />
              <input
                type="text"
                name="profession"
                value={form.profession}
                onChange={(e) =>
                  setForm({ ...form, profession: e.target.value })
                }
                placeholder="What is your profession?"
                required
              />
              <input
                type="text"
                name="organization"
                value={form.organization}
                onChange={(e) =>
                  setForm({ ...form, organization: e.target.value })
                }
                placeholder="What organization do you currently work for?"
                required
              />
              <input
                type="text"
                name="TOMO"
                value={form.hearTOMO}
                onChange={(e) => setForm({ ...form, hearTOMO: e.target.value })}
                placeholder="How did you hear about TOMO?"
                required
              />
              <input
                type="text"
                name="areas"
                value={form.areas}
                onChange={(e) => setForm({ ...form, areas: e.target.value })}
                placeholder="What are the areas of interest you would like to contribute to?"
                required
              />
              <br />
              <button type="submit" className={classes.sendButton}>
                Send Message
              </button>
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

export default JoinUs2;
