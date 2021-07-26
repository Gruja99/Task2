const express = require("express");
import { prop, getModelForClass } from "@typegoose/typegoose";
const mongoose = require("mongoose");
const app = express();
const port = 3000;
// create class Post
class Post {
  @prop()
  public ID?: number;
  @prop()
  public Title?: string;
  @prop()
  public Author?: string;
  @prop()
  public Content?: string;
  @prop()
  public Date?: Date;
}
// create model 
const PostModel = getModelForClass(Post);
// connect mongodb
mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "task2",
});
// create post
app.get("/", (req, res) => {
  PostModel.create(
    {
      ID: 1,
      Title: "Description1",
      Author: "miki",
      Content: "This is content",
      Date: new Date("2021-3-1"),
    },
    {
      ID: 2,
      Title: "Description2",
      Author: "miki",
      Content: "This is content",
      Date: new Date("2021-3-2"),
    },
    {
      ID: 3,
      Title: "Description3",
      Author: "miki",
      Content: "This is content",
      Date: new Date("2021-3-13"),
    },
    {
      ID: 4,
      Title: "Description4",
      Author: "miki",
      Content: "This is content",
      Date: new Date("2021-3-24"),
    },
    {
      ID: 5,
      Title: "Description5",
      Author: "miki",
      Content: "This is content",
      Date: new Date("2021-3-5"),
    },
    {
      ID: 6,
      Title: "Description6",
      Author: "miki",
      Content: "This is content",
      Date: new Date("2021-3-16"),
    },
    {
      ID: 7,
      Title: "Description7",
      Author: "miki",
      Content: "This is content",
      Date: new Date("2021-3-7"),
    },
    {
      ID: 8,
      Title: "Description8",
      Author: "miki",
      Content: "This is content",
      Date: new Date("2021-3-23"),
    },
    {
      ID: 9,
      Title: "Description9",
      Author: "miki",
      Content: "This is content",
      Date: new Date("2021-3-9"),
    },
    {
      ID: 10,
      Title: "Description10",
      Author: "miki",
      Content: "This is content",
      Date: new Date("2021-3-10"),
    }
  );
});
// sort posts
app.get("/sort", async (req, res) => {
  const sort = await PostModel.find({}).sort("Date");
  res.send(sort);
});
// find post
app.get("/find/:id", async (req, res) => {
  const ID = req.params.id;
  const find = await PostModel.find({ ID }).exec();
  res.send([find[0].Title, find[0].Author, find[0].Date]);
});

app.listen(port);
