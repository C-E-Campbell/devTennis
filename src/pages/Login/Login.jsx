import React, { Component } from "react";
import "./Login.scss";
import { login } from "../../redux/actions";
import { connect } from "react-redux";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BasicHeader from "../../components/BasicHeader/BasicHeader";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.email === "" || this.state.password === "") {
      toast.configure();
      const notify = () =>
        toast.error("Cannot leave email/pass fields blank", {
          autoClose: 3000
        });
      notify();
    } else {
      try {
        const registerUser = await axios.post("/api/login", {
          email: this.state.email,
          password: this.state.password
        });
        await this.props.login(registerUser.data);
        this.props.history.push("/");
      } catch (err) {
        toast.configure();
        const notify = () =>
          toast.error(
            "Email or Password seems to be invalid, may need to register.",
            {
              autoClose: 3000
            }
          );
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
      <div>
        <BasicHeader />
        <section className="register">
          <div className="register-form">
            <h2>Login in to your account</h2>
            <form
              onSubmit={e => {
                this.handleSubmit(e);
              }}
              action="submit"
            >
              <input
                placeholder="Enter Email"
                value={this.state.email}
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
                type="text"
              />

              <input
                placeholder="Enter Password"
                value={this.state.password}
                onChange={e => {
                  this.setState({ password: e.target.value });
                }}
                type="password"
              />
              <button>Login</button>
            </form>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
