const Home = require("../models/homes");

exports.getAddHome = (req, res) => {
  res.render("host/add-home", {
    pageTitle: "Add Home",
    currentPage: "AddHome",
  });
};

exports.postAddHome = (req, res) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.render("host/home-success", {
    pageTitle: "Home Added Successfully",
    currentPage: "HomeAdded",
  });
};

exports.getHostHomes = (req, res) => {
  const registeredHouses = Home.fetchAll((registeredHouses) =>
    res.render("host/host-home-list", {
      registeredHouses,
      pageTitle: "Host Homes List",
      currentPage: "HostHomes",
    })
  );
};
