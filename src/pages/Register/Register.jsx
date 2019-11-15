import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../redux/actions";
import "./Register.scss";
import { Link } from "react-router-dom";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.password === "" || this.state.email === "") {
      alert("password and/or email cannot be left blank");
    } else {
      try {
        const registerUser = await axios.post("/api/register", {
          email: this.state.email,
          password: this.state.password
        });
        this.props.register(registerUser.data);
        this.props.history.push("/");
      } catch (err) {
        alert("User already exists with that email, please login");
      }
    }
  };

  componentWillUnmount() {
    this.setState({ email: "", password: "" });
  }

  render() {
    return (
      <section className="register">
        <header>
          <Link to="/">Home</Link>
        </header>
        <div className="register-form">
          <h2>Register your account</h2>
          <form
            onSubmit={e => {
              this.handleSubmit(e);
            }}
            action="submit"
          >
            <label>Email</label>
            <input
              value={this.state.email}
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
              type="text"
            />
            <label>Password</label>
            <input
              value={this.state.password}
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
              type="password"
            />
            <button>Register</button>
          </form>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  register
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
