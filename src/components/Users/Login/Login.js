import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);

    axios
      .post("http://localhost:3001/login", user)
      .then((result) => {
        console.log(result.data)
        localStorage.setItem('user', JSON.stringify(result.data))
        this.props.history.push('/')
      })
      .catch((err) => console.log(err));

    this.setState({
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div className="container mt-4">
        <h3 className="text-center">Login</h3>
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
          <button type="submit" className="btn btn-primary mt-2">
            Login
          </button>
        </form>
      </div>
    );
  }
}
