const mongoose = require("mongoose");

const storySchema = new mongoose.Schema(
  {
    storyTitle: {
      type: "string",
      trim: true,
    },

    storyCountry: {
      type: "string",
      trim: true,
    },

    storyType: {
      type: "string",
      trim: true,
      enum: [
        "education",
        "sustainability",
        "peace-building",
        "economic-developement",
        "human-rights",
        "politics",
      ],
    },

    storyDescription: {
      type: "string",
      trim: true,
    },

    firstStoryContent: {
      type: "string",
      trim: true,
    },

    secondStoryContent: {
      type: "string",
      trim: true,
    },

    storyAuthor: {
      type: "string",
      trim: true,
    },

    storyAuthorImage: {
      type: "string",
      trim: true,
    },

    storyCompany: {
      type: "string",
      trim: true,
    },

    firstTitle: {
      type: "string",
      trim: true,
    },

    secondTitle: {
      type: "string",
      trim: true,
    },

    storyImage: {
      type: "string",
      trim: true,
    },

    storySecondImage: {
      type: "string",
      trim: true,
    },
    storyDate: {
      type: mongoose.Schema.Types.Date,
    },

    likes: {
      type: Number,
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StoryComment",
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

module.exports = mongoose.model("Story", storySchema);
