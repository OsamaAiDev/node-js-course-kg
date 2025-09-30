// core module
const path = require("path");

// external module
const express = require("express");
const userRouter = express.Router();

// local module
const rootDir = require("../utils/pathUtils");

userRouter.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

userRouter.get("/contact-us", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
});

userRouter.post("/contact-us", (req, res) => {
  console.log(req.body);

  res.sendFile(path.join(rootDir, "views", "contactSubmited.html"));
});

module.exports = userRouter;
