const mongoose = require("mongoose");

const facilitatorSchema = new mongoose.Schema(
  {
    fullName: {
      type: "string",
      required: [true, "Please enter your fullName"],
      trim: true,
    },

    email: {
      type: "string",
      required: [true, "Please enter your email"],
      trim: true,
    },

    profession: {
      type: "string",
      required: [true, "Please enter your profession"],
      trim: true,
    },

    organization: {
      type: "string",
      required: [true, "Please enter your organization name"],
      trim: true,
    },

    hearAboutTomo: {
      type: "string",
      required: [true, "How did you hear about tomo"],
      trim: true,
    },

    areas: {
      type: "string",
      required: [
        true,
        "What are the areas of interest you would like to contribute",
      ],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Facilitator", facilitatorSchema);
