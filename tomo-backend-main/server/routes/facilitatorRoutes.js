const express = require("express");
const router = express.Router();
const facilitatorController = require("../controllers/facilitatorController");

router.post("/newfacilitator", facilitatorController.new_facilitator);

module.exports = router;
