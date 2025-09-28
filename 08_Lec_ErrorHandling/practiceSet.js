const calculateArea = (width, height) => width * height;
let width = 10;
let height = 5;

let area = calculateArea(width, height);

if (area > 100) console.log("The area is large");
else console.log("The area is small");

if (area > 100) {
  console.log("area is greater than or equal to 100");
}
