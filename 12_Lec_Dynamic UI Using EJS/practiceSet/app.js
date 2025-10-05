const path = require("path");
const express = require("express");
const rootDir = require("./utils/pathUtil");
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use("/host", hostRouter);
app.use(userRouter);
app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) =>
  res
    .status(404)
    .render("404", { pageTitle: "404 page not found", currentPage: "404" })
);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
