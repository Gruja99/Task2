import express from "express";
const mongoose = require("mongoose");
const app = express();
const port = 3000;
import router from "./route";
// create model

// connect mongodb
mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "task2",
});
app.use("/", router);
app.listen(port);
