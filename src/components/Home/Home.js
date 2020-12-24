import React, { Component } from "react";
import axios from "axios";

import Article from "../Article/article.js"
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/")
      .then((result) => {
        console.log(result.data);
        this.setState({
          articles: result.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container mt-4">
        <h2 className="text-center">Hello, Guest</h2>
        <div className="card-groups">
        {this.state.articles.map((currentArticle, i) => {
          return <Article article={currentArticle} key={i} />;
        })}
        </div>
      </div>
    );
  }
}
