const express = require("express");
const database = require("./database").connectDB;
const cors = require("cors");
const communication = require("./routes/contactRoutes");
const facilitate = require("./routes/facilitatorRoutes");
const artifacts = require("./routes/artifactRoute");
const story = require("./routes/storyRoute");

const app = express();
const PORT = process.env.PORT || 3003
database();
app.use(express.json());
app.use(cors());

app.use("/api/communication", communication);
app.use("/api/facilitate", facilitate);
app.use("/api/artifact", artifacts);
app.use("/api/story", story);

app.listen(PORT, () => {
  console.log("Server is running on port 3003");
});


module.exports = app
