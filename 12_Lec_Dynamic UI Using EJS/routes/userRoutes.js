// core module
const path = require("path");
// external module
const express = require("express");

const { registeredHouses } = require("./hostRouter");

// express ek router bana da us ka name userRouter rhk lia ha
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log(registeredHouses);

  res.render("home", { registeredHouses, pageTitle: "airbnb home" });
});

module.exports = userRouter;
