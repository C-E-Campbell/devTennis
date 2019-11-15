import React from "react";
import "./Email.scss";
import axios from "axios";
class Email extends React.Component {
  state = {
    email: ""
  };
  sendDiscount = email => {
    axios.post("/api/discount", {
      sendTo: this.state.email
    });
    this.setState({ email: "" });
  };
  render() {
    return (
      <div className="email">
        <div className="email-container">
          <p className="email-text">
            Sign up and receive <span>15% OFF</span> !
          </p>
          <form
            onSubmit={async e => {
              e.preventDefault();
              await this.sendDiscount(this.state.email);
            }}
            className="form-box"
          >
            <input
              value={this.state.email}
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
              type="email"
              placeholder="Enter Email"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Email;
