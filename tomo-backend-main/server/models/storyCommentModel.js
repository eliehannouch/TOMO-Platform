const mongoose = require("mongoose");

const storyCommentModel = new mongoose.Schema(
  {
    parentStory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
    },
    commentOwner: {
      type: "string",
      trim: true,
    },
    commentContent: {
      type: "string",
      trim: true,
    },
    isModeretated: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StoryComment", storyCommentModel);