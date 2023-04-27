const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: "string",
      required: [true, "Please enter your fullName"],
      trim: true,
    },

    subject: {
      type: "string",
      required: [true, "Please enter the message subject"],
      trim: true,
    },

    email: {
      type: "string",
      required: [true, "Please enter your email"],
      trim: true,
    },

    message: {
      type: "string",
      required: [true, "Please enter the your message"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
