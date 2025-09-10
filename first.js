const { log } = require("console");
const fs = require("fs");

// define two variables
let a = 10;
let b = 20;

// basic arithmetic operation

let sum = a + b;
let product = a * b;

// prepare data to write
let data = `Sum: ${sum} \nProduct: ${product}`;
console.log(data);

// write data to local file

fs.writeFile("output.txt", data, (err) => {
  if (err) throw err;
  console.log("Data written to file");
});
