const path = require("path");
const express = require("express");
const rootDir = require("./utils/pathUtil");
const storeRouter = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");
const errorController = require("./controllers/errors");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use("/host", hostRouter);
app.use(storeRouter);
app.use(express.static(path.join(rootDir, "public")));

app.use(errorController.get404);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
