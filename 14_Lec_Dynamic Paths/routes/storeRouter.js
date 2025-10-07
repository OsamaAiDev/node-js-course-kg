const express = require("express");
const storeRouter = express.Router();
const storeController = require("../controllers/storeController");

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/homes/:homeId", storeController.getHomeDetails);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favourites", storeController.getfavouriteList);

module.exports = storeRouter;
