const express = require("express");
const router = express.Router();
const artifactController = require("../controllers/artifactsController");
const artifactCommentController = require("../controllers/artifactCommentController");

router.get("/filter", artifactController.getArtifactsByFilters);
router.get("/", artifactController.getAllArtifacts);
router.get("/:artifactID", artifactController.getArtifactById);
router.patch("/like/:artifactID", artifactController.likeArtifact);
router.patch("/dslike/:artifactID", artifactController.disLikeArtifact);

router.post("/comment/:artifactID", artifactCommentController.createComment);
router.get("/comment/:artifactID", artifactCommentController.getComments);

router.patch("/link/:artifactID", artifactController.getAShareAbleLink);

router.post("/search", artifactController.searchArtifact);

router.get("/filter", artifactController.getArtifactsByFilters);

module.exports = router;
