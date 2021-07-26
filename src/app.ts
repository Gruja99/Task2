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
      Title: "San",
      Author: "Miki",
      Content: "This is content",
      Date: new Date("2021-3-1"),
    },
    {
      ID: 2,
      Title: "Moon",
      Author: "Pera",
      Content: "This is content",
      Date: new Date("2021-3-2"),
    },
    {
      ID: 3,
      Title: "Rock",
      Author: "Joca",
      Content: "This is content",
      Date: new Date("2021-3-13"),
    },
    {
      ID: 4,
      Title: "Desktop",
      Author: "Zarko",
      Content: "This is content",
      Date: new Date("2021-3-24"),
    },
    {
      ID: 5,
      Title: "Laptop",
      Author: "Petra",
      Content: "This is content",
      Date: new Date("2021-3-5"),
    },
    {
      ID: 6,
      Title: "Server",
      Author: "Tijana",
      Content: "This is content",
      Date: new Date("2021-3-16"),
    },
    {
      ID: 7,
      Title: "Internet",
      Author: "Ana",
      Content: "This is content",
      Date: new Date("2021-3-7"),
    },
    {
      ID: 8,
      Title: "Wifi",
      Author: "John",
      Content: "This is content",
      Date: new Date("2021-3-23"),
    },
    {
      ID: 9,
      Title: "Python",
      Author: "Luka",
      Content: "This is content",
      Date: new Date("2021-3-9"),
    },
    {
      ID: 10,
      Title: "NodeJS",
      Author: "Maja",
      Content: "This is content",
      Date: new Date("2021-3-10"),
    }
  );
  res.send("Add posts")
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
