import faker from "faker";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Article from "../models/article.js";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

Article.remove({})
  .then(() => {
    let articles = [];
    for (let i = 0; i < 30; i++) {
      articles.push({
        title: faker.name.title(),
        author: faker.name.findName(),
        articleText: faker.lorem.paragraph(),
        likesCount: Math.round(Math.random() * 20),
      });
    }
    return Article.create(articles);
  })
  .then((result) => {
    console.log(result);
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
