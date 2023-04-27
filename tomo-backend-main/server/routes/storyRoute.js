const express = require("express");
const router = express.Router();
const storyController = require("../controllers/storyController");
const storyCommentController = require("../controllers/storyCommentController");

router.get("/filter/:storyType", storyController.getStoriesByFilters);
router.get("/comment/:storyID", storyCommentController.getComments);
router.get("/:storyType", storyController.getAllStoryByType);
router.get("/:storyType/:storyID", storyController.getStoryById);
router.patch("/like/:storyID", storyController.likeStory);
router.patch("/dslike/:storyID", storyController.disLikeStory);

router.post("/comment/:storyID", storyCommentController.createComment);

router.patch("/link/:storyType/:storyID", storyController.getAShareAbleLink);

router.post("/search", storyController.searchStories);

module.exports = router;
