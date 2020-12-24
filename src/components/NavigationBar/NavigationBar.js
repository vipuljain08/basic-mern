import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: false
    }
  }
  handleLogout = () => {
    localStorage.clear()
    this.setState({
      user: false
    })
  }
  render() {
    const loggedInUser = localStorage.getItem("user")
    const userLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink to="/createArticle" className="btn btn-primary">
            Create Article
          </NavLink>
        </li>
        <li className="nav-item">
          <a
            href="#"
            onClick={this.handleLogout}
            className="btn btn-outline-primary"
          >
            Log Out
          </a>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-5">
          <NavLink to="/createArticle" className="btn btn-primary">
            Create Article
          </NavLink>
        </li>
        <li className="nav-item mr-2">
          <NavLink to="/login" className="btn btn-outline-primary">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="btn btn-outline-primary">
            Signup
          </NavLink>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <h1 className="navbar-brand">MERN App</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNavBar"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNavBar">
          {loggedInUser ? userLinks : guestLinks}
        </div>
      </nav>
    );
  }
}
