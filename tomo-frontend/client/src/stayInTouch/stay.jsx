import React, { useState } from "react";
import classes from "./sray.module.css";
import stay from "../assets/QR.jpeg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Stay = () => {
  const [form, setForm] = useState({
    email: "",
    updateMe: false,
    isFacilator: false,
    isParticpant: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        email: form.email,
        updateMe: form.updateMe,
        isFacilator: form.isFacilator,
        isParticpant: form.isParticpant,
      };
      const data = await axios.post(
        "https://tomo-backend-l18z.vercel.app/api/communication/stayintouch",
        formData
      );
      setForm({
        email: "",
        updateMe: false,
        isFacilator: false,
        isParticpant: false,
      });
      toast.success(
        "Thank you for your interest in our program. You will receive our updates based on your interest"
      );
      console.log(form.updateMe);
      setForm({
        email: "",
        updateMe: false,
        isFacilator: false,
        isParticpant: false,
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className={classes.stayContainer}>
      <div>
        <h4>
          Thank you for attending our presentation in Perugia. As we continue
          developing TOMO, we would love to stay in touch with you if you are
          open to that, leave us your email below
        </h4>
      </div>
      <div className={classes.subContainer}>
        <div className={classes.form}>
          <form onSubmit={handleSubmit}>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              placeholder="Enter your email"
            />
            <div className={classes.checkBox}>
              <input
                value={form.updateMe}
                checked={form.updateMe}
                onChange={(e) =>
                  setForm({ ...form, updateMe: e.target.checked })
                }
                type="checkbox"
                name="Keep me updated"
                id="keep"
              />
              <label htmlFor="keep" style={{ marginLeft: "20px" }}>
                Keep me updated
              </label>
            </div>
            <div className={classes.checkBox}>
              <input
                value={form.isFacilator}
                checked={form.isFacilator}
                onChange={(e) =>
                  setForm({ ...form, isFacilator: e.target.checked })
                }
                type="checkbox"
                name="I'm interested to be a facilitator"
                id=""
              />
              <label htmlFor="keep" style={{ marginLeft: "20px" }}>
                I'm interested to be a facilitator
              </label>
            </div>
            <div className={classes.checkBox}>
              <input
                value={form.isParticpant}
                checked={form.isParticpant}
                onChange={(e) =>
                  setForm({ ...form, isParticpant: e.target.checked })
                }
                type="checkbox"
                name="I'm interested to be a Participant"
                id=""
              />
              <label htmlFor="keep" style={{ marginLeft: "20px" }}>
                I'm interested to be a participant
              </label>
            </div>
            <div className={classes.submit}>
              <button>Send</button>
            </div>
          </form>
          <div></div>
        </div>
        <div className={classes.image}>
          <img src={stay} alt="" />
        </div>
      </div>
      <ToastContainer
        style={{
          fontSize: "18px",
        }}
      />
    </div>
  );
};

export default Stay;
