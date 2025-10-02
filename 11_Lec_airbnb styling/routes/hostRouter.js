// core module
const path = require("path");
// external module
const express = require("express");
// local module
const rootDir = require("../utils/pathUtils");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "add-home.html"));
  res.sendFile(path.join(rootDir, "views", "add-home.html"));
});
hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  // res.sendFile(path.join(__dirname, "../", "views", "home-added.html"));
  res.sendFile(path.join(rootDir, "views", "home-added.html"));
});

module.exports = hostRouter;
