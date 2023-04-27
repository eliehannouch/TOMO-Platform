const Comment = require("../models/storyCommentModel");
const Story = require("../models/storyModel");

exports.createComment = async (req, res) => {
  try {
    const story = await Story.findById(req.params.storyID);
    if (!story) {
      return res.status(404).json({
        message:
          "This story was not found. Our Content management team will fix it soon",
      });
    }

    const comment = new Comment({
      parentStory: req.params.storyID,
      commentOwner: req.body.commentOwner,
      commentContent: req.body.commentContent,
      isModeretated: false,
    });

    await comment.save();

    await story.updateOne({ $push: { comments: comment._id } });

    res.status(201).json({ message: "Your comment was sent to moderation" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message:
        err.message ||
        "An error occurred while writing the comment. Please try again",
    });
  }
};

exports.getComments = async (req, res) => {
  console.log('pass')
  try {
    const comments = await Comment.find({
      $and: [{ parentStory: req.params.storyID }, { isModeretated: true }],
    });
    if (!comments) {
      return res.status(404).json({
        message:
          "No comments was found for this story. Please Check again later",
      });
    }
    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message:
        err.message ||
        "An error occurred while fetching the comments. Please try again",
    });
  }
};