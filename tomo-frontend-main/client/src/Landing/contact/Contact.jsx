import React, { useState } from "react";
import classes from "./contact.module.css";
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        fullName: form.name,
        subject: form.subject,
        email: form.email,
        message: form.message
      }
      const data = await axios.post('https://tomo-backend-l18z.vercel.app/api/communication/contactus',formData)
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      toast.success(
        "Your message has been delivered, we will get back to you shortly"
      );
    } catch (error) {
      
    }
   
  };
  return (
    <div className={classes.contactSection}>
      {/* Title */}
      <div className={classes.contact}>
        <h3>
          <span>Contact Us</span>
        </h3>
      </div>
      <div className={`${classes.container} ${classes.contact__container}`}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            value={form.name}
            required
          />
          <input
            type="email"
            name="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}

            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Your Subject here"
            value={form.subject}

            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            required
          />
          <textarea
            name="message"
            id=""
            rows="7"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Your Message"
          ></textarea>
          <br />
          <ToastContainer
            style={{
              fontSize: "18px",
            }}
          />
          <button type="submit" className={classes.sendButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
