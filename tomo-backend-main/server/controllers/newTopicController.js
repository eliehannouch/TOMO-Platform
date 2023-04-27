const Topic = require("../models/recommendTopicModel");

exports.newTopic = async (req, res) => {
  try {
    const new_topic = await Topic.create({
      newTopic: req.body.newTopic,
    });

    res.status(201).json({
      message:
        "Thank you for sharing new topics that interest you. Our team will take it into consideration",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message:
        err.message ||
        "Some error occurred while sending your message. Please try again",
    });
  }
};
