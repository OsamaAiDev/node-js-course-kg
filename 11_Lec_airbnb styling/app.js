// core module
const path = require("path");

// external module
const express = require("express");

// local module
const userRouter = require("./routes/userRoutes");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtils");
const app = express();
const PORT = 3000;

// hr req ka url and method log kre ga
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
//agr req ka sath data aye ga  tu us ko parse kr ka req.body ma add kr da ga
app.use(express.urlencoded());
// handle host routes / paths
app.use("/host", hostRouter);
// handle user Routes / paths
app.use(userRouter);
// public files in public folder
app.use(express.static(path.join(rootDir, "public")));
// adding 404

app.use((req, res, next) =>
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"))
);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
