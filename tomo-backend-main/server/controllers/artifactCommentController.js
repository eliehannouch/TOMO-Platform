const Comment = require("../models/artifactComment");
const Artifact = require("../models/artifactModel");

exports.createComment = async (req, res) => {
  try {
    const artifact = await Artifact.findById(req.params.artifactID);
    if (!artifact) {
      return res.status(404).json({
        message:
          "This artifact was not found. Our Content management team will fix it soon",
      });
    }

    const comment = new Comment({
      parentArtifact: req.params.artifactID,
      commentOwner: req.body.commentOwner,
      commentContent: req.body.commentContent,
      isModeretated: false,
    });

    await comment.save();

    await artifact.updateOne({ $push: { comments: comment._id } });

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
  try {
    const comments = await Comment.find({
      $and: [
        { parentArtifact: req.params.artifactID },
        { isModeretated: true },
      ],
    });
    if (!comments) {
      return res.status(404).json({
        message:
          "No comments was found for this artifact. Please Check again later",
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
