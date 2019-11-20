import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer/Footer";
import { register } from "../../redux/actions";
import "./Register.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.configure();
      const notify = () =>
        toast.error("Cannot leave email/pass fields blank", {
          autoClose: 3000
        });
      notify();
    } else {
      try {
        const registerUser = await axios.post("/api/register", {
          email: this.state.email,
          password: this.state.password
        });
        this.props.register(registerUser.data);
        this.props.history.push("/");
      } catch (err) {
        toast.configure();
        const notify = () =>
          toast.error("User already exists, please login", {
            autoClose: 3000
          });
        notify();
      }
    }
  };

  componentWillUnmount() {
    window.scrollTo(0, 0);
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
        <Footer />
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
