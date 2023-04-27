const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const stayInTouch = require("../controllers/stayInTouchController");
const newTopic = require("../controllers/newTopicController");

router.post("/contactus", contactController.contactUs);
router.post("/stayintouch", stayInTouch.stayInTouch);
router.post("/newTopic", newTopic.newTopic);

module.exports = router;
