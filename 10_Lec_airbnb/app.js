// external module
const express = require("express");
const app = express();
const PORT = 3000;

// hr req ka url and method log kre ga
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
//agr req ka sath data aye ga  tu us ko parse kr ka req.body ma add kr da ga
app.use(express.urlencoded());
app.get("/", (req, res, next) => {
  res.send(`
    <h1>Welcome to airbnb</h1>
    <a href="/add-home">Add Home</a>
    `);
});
app.get("/add-home", (req, res, next) => {
  res.send(`
    <h1>Register your home here:</h1>
     <form action="/add-home" method="post">
      <input type="text" name="houseName" placeholder="Enter house name" />
      <input type="submit" />
    </form>
    `);
});
app.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`
    <h1>Home registered successfully</h1>
    <a href="/">Go toHome</a>
    `);
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
