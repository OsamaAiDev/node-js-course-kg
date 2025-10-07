const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const { json } = require("stream/consumers");
const homesDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }
  save() {
    this.id = Math.random().toString();
    Home.fetchAll((registeredHouses) => {
      registeredHouses.push(this);
      fs.writeFile(homesDataPath, JSON.stringify(registeredHouses), (err) =>
        console.log("Writing in file concluded", err)
      );
    });
  }
  static fetchAll(callback) {
    const fileData = fs.readFile(homesDataPath, (err, data) => {
      console.log("File read:", data, err);
      callback(!err ? JSON.parse(data) : []);
    });
  }

  // fetch all return all homes in homes
  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => home.id === homeId);
    });
  }
};
