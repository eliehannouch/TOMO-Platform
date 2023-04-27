const mongoose = require("mongoose");

const artifactCommentModel = new mongoose.Schema(
  {
    parentArtifact: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artifact",
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

module.exports = mongoose.model("ArtifactComment", artifactCommentModel);
