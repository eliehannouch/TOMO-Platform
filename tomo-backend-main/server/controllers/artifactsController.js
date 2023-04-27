const Artifact = require("../models/artifactModel");

exports.getAllArtifacts = async (req, res) => {
  try {
    const artifacts = await Artifact.find({});

    if (artifacts.length === 0) {
      return res.status(404).json({
        message: "No artifacts found. Our team will add them soon",
      });
    }

    res.status(200).json({ data: artifacts });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message:
        err.message ||
        "Some error occurred while fetching the artifacts. Please try again",
    });
  }
};

exports.getArtifactById = async (req, res) => {
  try {
    const artifact = await Artifact.findById(req.params.artifactID);
    if (!artifact) {
      return res.status(404).json({
        message:
          "This artifact was not found. Our Content management team will add it soon",
      });
    }

    res.status(200).json({ data: artifact });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message:
        err.message ||
        "Some error occurred while fetching the artifact. Please try again",
    });
  }
};

exports.getAShareAbleLink = async (req, res) => {
  try {
    const artifact = await Artifact.findById(req.params.artifactID);
    if (!artifact) {
      return res.status(404).json({
        message:
          "This artifact was not found. Our Content management team will add it soon",
      });
    }
    const artifactID = req.params.artifactID;
    const domain = "tomo-frontend.vercel.app";
    const shareableLink = `https://${domain}/imaginary/artifact/${artifactID}`;

    artifact.sharableLink = shareableLink;
    await artifact.save();

    res.status(200).json({ data: shareableLink });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message:
        err.message ||
        "Some error occurred while fetching the artifact. Please try again",
    });
  }
};

exports.likeArtifact = async (req, res) => {
  try {
    const artifact = await Artifact.findById(req.params.artifactID);
    if (!artifact) {
      return res.status(404).json({
        message:
          "This artifact was not found. Our Content management team will add it soon",
      });
    }

    artifact.likes += 1;
    await artifact.save();

    res.status(200).json({ data: artifact });
  } catch (err) {
    console.log(err);
  }
};

exports.disLikeArtifact = async (req, res) => {
  try {
    const artifact = await Artifact.findById(req.params.artifactID);
    if (!artifact) {
      return res.status(404).json({
        message:
          "This artifact was not found. Our Content management team will add it soon",
      });
    }

    artifact.likes -= 1;
    await artifact.save();

    res.status(200).json({ data: artifact });
  } catch (err) {
    console.log(err);
  }
};

exports.searchArtifact = async (req, res) => {
  try {
    const { title } = req.query;
    const filter = {};

    if (title) {
      filter.title = { $regex: title, $options: "i" };
    }
    const artifacts = await Artifact.find(filter);

    if (!artifacts)
      return res.json({
        message:
          "This artifact was not found. Our Content management team will add it soon",
      });
    return res.json({ data: artifacts });
  } catch (err) {
    console.error("Error searching artifacts:", err);
  }
};

exports.getArtifactsByFilters = async (req, res) => {
  try {
    const sortByLebanon = req.query.sortByLebanon === "lebanon";
    const sortByAfghanistan = req.query.sortByAfghanistan === "afghanistan";

    let artifacts;

    if (sortByLebanon) {
      artifacts = await Artifact.find({ country: "lebanon" });
    } else if (sortByAfghanistan) {
      artifacts = await Artifact.find({ country: "afghanistan" });
    } else {
      artifacts = await Artifact.find();
    }
    res.status(200).json({
      data: artifacts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Server Error",
    });
  }
};
