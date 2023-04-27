const contact = require("../models/contactModel");
const validator = require("validator");

exports.contactUs = async (req, res) => {
  try {
    const email = req.body.email;

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Please enter a valid email",
      });
    }

    const new_Contact_request = await contact.create({
      fullName: req.body.fullName,
      subject: req.body.subject,
      email: req.body.email,
      message: req.body.message,
    });

    res.status(201).json({
      message:
        "Your message has been delivered, we will get back to you shortly",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message:
        err.message ||
        "Some error occurred while sending your message. Please try again",
    });
  }
};
