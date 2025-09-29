// external module
const express = require("express");
const app = express();
const port = 3000;
// Adding Middleware
app.get("/", (req, res, next) => {
  console.log("First Middleware", req.url, req.method);
  // cannot call next after res.send
  // res.send("<p>Weclome</p>");
  next();
});
app.use("/submit-details", (req, res, next) => {
  console.log("Second Middleware Submit Details", req.url, req.method);
  res.send("<p>Welcome to Submit Details Page</p>");
});

app.use("/", (req, res, next) => {
  console.log("Second Middleware", req.url, req.method);
  res.send("Welcome");
});

app.listen(port, () => {
  console.log("Server is listening on port", port);
});
