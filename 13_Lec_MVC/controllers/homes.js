const Home = require("../models/homes");

exports.getAddHome = (req, res) => {
  res.render("add-home", { pageTitle: "Add Home", currentPage: "AddHome" });
};

exports.postAddHome = (req, res) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.render("home-success", {
    pageTitle: "Home Added Successfully",
    currentPage: "HomeAdded",
  });
};

exports.getHomes = (req, res) => {
  const registeredHouses = Home.fetchAll((registeredHouses) =>
    res.render("home", {
      registeredHouses,
      pageTitle: "airbnb Home",
      currentPage: "Home",
    })
  );
};
