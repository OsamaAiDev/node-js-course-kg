const Home = require("../models/homes");

exports.getIndex = (req, res) => {
  const registeredHouses = Home.fetchAll((registeredHouses) =>
    res.render("store/index", {
      registeredHouses,
      pageTitle: "airbnb Home",
      currentPage: "Index",
    })
  );
};
exports.getHomes = (req, res) => {
  const registeredHouses = Home.fetchAll((registeredHouses) =>
    res.render("store/home-list", {
      registeredHouses,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
  );
};
exports.getBookings = (req, res) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "Bookings",
  });
};
exports.getfavouriteList = (req, res) => {
  const registeredHouses = Home.fetchAll((registeredHouses) =>
    res.render("store/favourite-list", {
      registeredHouses,
      pageTitle: "My Favourites",
      currentPage: "Favourites",
    })
  );
};

exports.getHomeDetails = (req, res) => {
  const homeId = req.params.homeId;
  console.log("Home details page", homeId);
  res.render("store/home-detail", {
    pageTitle: "Home Detail",
    currentPage: "Home",
  });
};
