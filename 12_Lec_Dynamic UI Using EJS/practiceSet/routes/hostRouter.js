const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res) => {
  res.render("add-home", { pageTitle: "Add Home", currentPage: "AddHome" });
});
const registeredHouses = [];
hostRouter.post("/add-home", (req, res) => {
  registeredHouses.push(req.body);
  res.render("home-success", {
    pageTitle: "Home Added Successfully",
    currentPage: "HomeAdded",
  });
});

exports.hostRouter = hostRouter;
exports.registeredHouses = registeredHouses;
