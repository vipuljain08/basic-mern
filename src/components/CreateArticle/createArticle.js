import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import axios from "axios";

export default class CreateArticle extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeArticleText = this.onChangeArticleText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      author: "",
      articleText: "",
      likes: 0
    };
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }
  onChangeAuthor(e) {
    this.setState({ author: e.target.value });
  }
  onChangeArticleText(e) {
    this.setState({ articleText: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");
    const article = {
      title: this.state.title,
      author: this.state.author,
      articleText: this.state.articleText,
      likesCount: this.state.likes
    };
    console.log(article);

    axios
      .post("http://localhost:3001/create-article", article)
      .then((result) => {
        console.log(result.data)
        this.props.history.push("/")
      })
      .catch((err) => console.log(err));

    this.setState({
      title: "",
      author: "",
      articleText: "",
    });
  }

  render() {
    return (
      <div className="container mt-4">
        <h3 className="text-center">Create Your First Article</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              placeholder="Title"
              id="title"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group mt-4">
            <label for="author">Author</label>
            <input
              type="text"
              placeholder="Author"
              id="author"
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
            />
          </div>
          <div className="form-group mt-4">
            <label for="articleTextArea">Write Your Article</label>
            <textarea
              type="text"
              placeholder="Article"
              id="articleText"
              className="form-control"
              value={this.state.articleText}
              onChange={this.onChangeArticleText}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
