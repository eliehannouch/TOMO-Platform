const touch = require("../models/stayInTouchModel");
const validator = require("validator");

exports.stayInTouch = async (req, res) => {
  try {
    const email = req.body.email;

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Please enter a valid email",
      });
    }

    const new_touch_request = await touch.create({
      email: req.body.email,
      updateMe: req.body.updateMe,
      isFacilator: req.body.isFacilator,
      isParticpant: req.body.isParticpant,
    });

    res.status(201).json({
      message:
        "Thank you for your interest in our program. You will receive our updates based on your interest",
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
