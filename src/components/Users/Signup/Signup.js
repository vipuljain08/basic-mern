import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  onChangeConfirmPassword(e) {
    this.setState({ confirmPassword: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("Signup");
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    if (this.state.password === this.state.confirmPassword) {
      axios
        .post("http://localhost:3001/signup", user)
        .then((result) => {
          console.log(result.data)
          this.props.history.push("/login")
        })
        .catch((err) => {
          console.log(err);
        });
    }

    this.setState({
      email: "",
      password: "",
      confirmPassword: "",
    });
  }
  render() {
    return (
      <div className="container mt-4">
        <h3 className="text-center">Sign Up</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              class="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              class="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              class="form-control"
              value={this.state.confirmPassword}
              onChange={this.onChangeConfirmPassword}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
