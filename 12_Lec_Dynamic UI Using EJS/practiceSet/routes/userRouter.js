const express = require("express");
const { registeredHouses } = require("./hostRouter");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.render("home", {
    registeredHouses,
    pageTitle: "airbnb Home",
    currentPage: "Home",
  });
});

module.exports = userRouter;
