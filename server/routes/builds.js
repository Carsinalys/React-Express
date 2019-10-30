const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../controllers/isAuthenticated");
const builds = require("../controllers/builds");

router
  .route("/api/v1.0/builds")
  .post(isAuthenticated, builds.setBuilds)
  .get(builds.getBuilds);

module.exports = router;
