const mongoose = require("mongoose");
const stayInTouch = new mongoose.Schema(
  {
    email: {
      type: "string",
      required: [true, "Please enter your email"],
      minLength: 5,
      trim: true,
    },
    updateMe: {
      type: Boolean,
      default: false,
    },
    isFacilator: {
      type: Boolean,
      default: false,
    },
    isParticpant: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StayInTouch", stayInTouch);
