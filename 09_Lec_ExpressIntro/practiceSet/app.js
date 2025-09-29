const express = require("express");
const app = express();
const port = 3000;

// Adding Two Dummy Middleware that log req url & method

app.use((req, res, next) => {
  console.log("First Middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Second Middleware", req.url, req.method);
  next();
});
// app.use((req, res, next) => {
//   res.send("<h1>Welcome from third middleware</h1>");
// });

app.get("/", (req, res) => {
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

app.post("/contact-us", (req, res) => {
  console.log("contact us route", req);
  res.send("Form submited");
});

app.listen(port, () => {
  console.log("Server is listening on port", port);
});
