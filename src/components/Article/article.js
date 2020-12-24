import React, { Component } from "react";
import axios from "axios";

import "./article.css";

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.likeArticle = this.likeArticle.bind(this);

    this.state = {
      title: props.article.title,
      articleText: props.article.articleText,
      author: props.article.author,
      articleId: props.article._id,
      likesCount: props.article.likesCount,
    };
  }

  likeArticle(id) {
    axios
      .put("http://localhost:3001/like", { articleId: id })
      .then((result) => {
        console.log(result.data);
        this.setState({
          likesCount: result.data.likesCount,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { title, articleText, author, articleId, likesCount } = this.state;
    return (
      <div className="card border-dark">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{articleText}</p>
          <div className="card-deck">
            <p className="card-author text-muted">
              ✏ <cite title="Source Title">{author}</cite>
            </p>
            <a
              href="#"
              onClick={() => {
                this.likeArticle(articleId);
              }}
              className="btn border-primary like-btn"
              data-post-id={articleId}
            >
              ❤ <span class={"likes-count-" + articleId}>{likesCount}</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

// const Article = (props) => (
//   <div className="card border-dark">
//     <div className="card-body">
//       <h5 className="card-title">{props.article.title}</h5>
//       <p className="card-text">{props.article.articleText}</p>
//       <div className="card-groups">
//         <p className="card-author text-muted">
//           ✏ <cite title="Source Title">{props.article.author}</cite>
//         </p>
//         <button
//           onClick={() => {
//             likeArticle(props.article._id);
//           }}
//           className="btn border-primary like-btn"
//           data-post-id={props.article._id}
//         >
//           Like ❤
//         </button>
//         <span class={"likes-count-" + props.article._id}>
//           {props.article.likesCount}
//         </span>
//       </div>
//     </div>
//   </div>
// );
