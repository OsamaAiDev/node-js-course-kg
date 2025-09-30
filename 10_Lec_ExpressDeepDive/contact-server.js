const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use((req, res, next) => {
  console.log("First Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Middleware", req.url, req.method);
  next();
});

app.get("/", (req, res) => {
  console.log("Inside home route");

  res.send("<h1>Welcome to practice set</h1>");
});

app.get("/contact-us", (req, res) => {
  res.send(`
    <h2>Contact Us</h2>
    <form action="/contact-us" method="post">
      <input type="text" name="name" placeholder="Enter Name" />
      <input type="email" name="email" placeholder="Enter Email" />
      <input type="submit" value="Submit" />
    </form>
    `);
});

// it will add body property in req obj
app.use(bodyParser.urlencoded());
app.post("/contact-us", (req, res) => {
  console.log("contact us route", req.body);
  res.send("Form submited");
});

app.listen(port, () => {
  console.log("Server is listening on port", port);
});
