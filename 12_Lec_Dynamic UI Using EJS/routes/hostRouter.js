// core module
const path = require("path");
// external module
const express = require("express");
// local module

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.render("add-home", { pageTitle: "Add Home" });
});

const registeredHouses = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home registration successful for:", req.body.houseName);
  registeredHouses.push({ houseName: req.body.houseName });
  res.render("home-added", { pageTitle: "Home Registered " });
});

exports.hostRouter = hostRouter;
exports.registeredHouses = registeredHouses;
