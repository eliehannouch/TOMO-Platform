const facilitator = require("../models/facilitatorModel");
const validator = require("validator");

exports.new_facilitator = async (req, res) => {
  try {
    const email = req.body.email;

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Please enter a valid email",
      });
    }

    const new_facilitator = await facilitator.create({
      fullName: req.body.fullName,
      email: req.body.email,
      profession: req.body.profession,
      organization: req.body.organization,
      hearAboutTomo: req.body.hearAboutTomo,
      areas: req.body.areas,
    });

    res.status(201).json({
      message:
        "Your request has been delivered, we will get back to you shortly",
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
