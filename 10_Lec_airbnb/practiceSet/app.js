// core module
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

// local module
const userRouter = require("./routes/userRouter");
const rootDir = require("../utils/pathUtils");
// Adding  Dummy Middleware that log req url & method

app.use((req, res, next) => {
  console.log("First Middleware", req.url, req.method);
  next();
});
app.use(express.urlencoded());
app.use(userRouter);

// handling 404
app.use((req, res) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(port, () => {
  console.log("Server is listening on port", port);
});
