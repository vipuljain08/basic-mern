import userEvent from "@testing-library/user-event";
import Article from "../models/article.js";

const articleController = {
  loadArticles(req, res, next) {
    Article.find()
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => console.log(err));
  },
  createArticle(req, res, next) {
    const { title, author, articleText, likesCount } = req.body;
    const article = new Article({
      title: title,
      author: author,
      articleText: articleText,
      likesCount: likesCount,
    });
    article
      .save()
      .then((result) => {
        console.log("Article Created");
        res.status(200).json({ article: "article created" });
      })
      .catch((err) => {
        res.status(400).send("article creation failed");
      });
  },
  handleLikes(req, res, next) {
    console.log(req.body)
    Article.findByIdAndUpdate(req.body.articleId, {
      $inc: { likesCount: 1 },
    }, {new: true})
      .then((result) => res.json(result))
      .catch((err) => {
        return res.status(422).json({ error: err });
      });
  },
};

export default articleController;
