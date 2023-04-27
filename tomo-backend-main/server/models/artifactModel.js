const mongoose = require("mongoose");

const artifactModel = new mongoose.Schema(
  {
    title: {
      type: "string",
      trim: true,
    },

    country: {
      type: "string",
      trim: true,
    },

    smallDescription: {
      type: "string",
      trim: true,
    },

    source: {
      type: "string",
      trim: true,
    },

    artifactContent: {
      type: "string",
      trim: true,
    },

    artifactAttention: {
      type: "string",
      trim: true,
    },

    artifactImage: {
      type: "string",
      trim: true,
    },

    likes: {
      type: Number,
      default: 0,
    },

    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ArtifactComment",
      },
    ],
    sharableLink: {
      type: "string",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Artifact", artifactModel);
