const Story = require("../models/storyModel");

exports.getAllStoryByType = async (req, res) => {
  try {
    const stories = await Story.find({ storyType: req.params.storyType });

    if (stories.length === 0) {
      return res.status(404).json({
        message: "No Stories was found for this section. Our team will add them soon",
      });
    }

    res.status(200).json({ data: stories });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message:
        err.message ||
        "Some error occurred while fetching the stories. Please try again",
    });
  }
};

exports.getFeaturedStoryByType = async (req, res) => {
  try {
    const stories = await Story.find({
      $and: [{ isFeatured: true }, { storyType: req.params.storyType }],
    });

    if (stories.length === 0) {
      return res.status(404).json({
        message: "No Featured Stories found. Our team will add them soon",
      });
    }

    res.status(200).json({ data: stories });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message:
        err.message ||
        "Some error occurred while fetching the featured stories. Please try again",
    });
  }
};

exports.getStoryById = async (req, res) => {
  try {
    const story = await Story.findOne({
      $and: [{ _id: req.params.storyID }, { storyType: req.params.storyType }],
    });
    if (!story) {
      return res.status(404).json({
        message:
          "This Story was not found. Our Content management team will add it soon",
      });
    }

    res.status(200).json({ data: story });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message:
        err.message ||
        "Some error occurred while fetching the story. Please try again",
    });
  }
};

exports.getAShareAbleLink = async (req, res) => {
  try {
    const story = await Story.findById(req.params.storyID);
    if (!story) {
      return res.status(404).json({
        message:
          "This story was not found. Our Content management team will add it soon",
      });
    }
    const storyID = req.params.storyID;
    const domain = "tomo-frontend.vercel.app";
    const shareableLink = `https://${domain}/stories/${req.params.storyType}/content/${storyID}`;

    story.sharableLink = shareableLink;
    await story.save();

    res.status(200).json({ data: shareableLink });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message:
        err.message ||
        "Some error occurred while creating the shareable link story. Please try again",
    });
  }
};


exports.likeStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.storyID);
    if (!story) {
      return res.status(404).json({
        message:
          "This story was not found. Our Content management team will add it soon",
      });
    }

    story.likes += 1;
    await story.save();

    res.status(200).json({ data: story });
  } catch (err) {
    console.log(err);
  }
};

exports.disLikeStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.storyID);
    if (!story) {
      return res.status(404).json({
        message:
          "This story was not found. Our Content management team will add it soon",
      });
    }

    story.likes -= 1;
    await story.save();

    res.status(200).json({ data: story });
  } catch (err) {
    console.log(err);
  }
};

exports.searchStories = async (req, res) => {
  const { query } = req.query;

  try {
    const stories = await Story.find({
      $or: [
        { storyTitle: { $regex: query, $options: "i" } },
        { storyAuthor: { $regex: query, $options: "i" } },
        { storyCountry: { $regex: query, $options: "i" } },
      ],
    });

    if (!stories)
      return res.json({
        message:
          "This story was not found. Our Content management team will add it soon",
      });

    res.json(stories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getStoriesByFilters = async (req, res) => {
  try {
    const sortByDate = req.query.sortByDate === "true";
    const sortByAuthor = req.query.sortByAuthor === "true";
    const storyCountry = req.query.storyCountry === "true";
    const { storyType } = req.params;
    let stories;

    if (sortByDate) {
      stories = await Story.find({storyType}).sort({ storyDate: "desc" });
    } else if (sortByAuthor) {
      stories = await Story.find({storyType}).sort({ storyAuthor: "asc" });
    } else if (storyCountry) {
      stories = await Story.find({storyType}).sort({ storyCountry: "asc" });
    } else {
      stories = await Story.find({storyType});
    }

    res.status(200).json({
      data: stories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Server Error",
    });
  }
};
