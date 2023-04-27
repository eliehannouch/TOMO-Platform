const mongoose = require("mongoose");

const recommendTopic = new mongoose.Schema(
  {
    newTopic: {
      type: "string",
      required: [true, "Please enter your topic of interest"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RecommendTopic", recommendTopic);
