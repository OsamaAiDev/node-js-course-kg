const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const { json } = require("stream/consumers");

// fake db
// let registeredHouses = [];

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }
  save() {
    Home.fetchAll((registeredHouses) => {
      registeredHouses.push(this);
      const homesDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homesDataPath, JSON.stringify(registeredHouses), (err) =>
        console.log("Writing in file concluded", err)
      );
    });
  }
  static fetchAll(callback) {
    const homesDataPath = path.join(rootDir, "data", "homes.json");

    const fileData = fs.readFile(homesDataPath, (err, data) => {
      console.log("File read:", data, err);
      callback(!err ? JSON.parse(data) : []);
      // if (!err) {
      //   // registeredHouses = JSON.parse(data);
      //   callback(JSON.parse(data));
      // } else {
      //   callback([]);
      // }
      // return registeredHouses;
    });
  }
};
