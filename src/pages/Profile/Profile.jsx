import React, { Component } from "react";
import { connect } from "react-redux";
import "./Profile.scss";
import userPhoto from "../../assets/josh.jpg";
import { updateEmail, logout, login } from "../../redux/actions";
import axios from "axios";
import BasicHeader from "../../components/BasicHeader/BasicHeader";
import Login from "../../pages/Login/Login";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
class Profile extends Component {
  state = {
    currentPass: "",
    newPass: "",
    newEmail: "",
    passSet: false
  };

  updateEmail = async (newEmail, user_id) => {
    const result = await axios.put("/api/updateEmail", {
      newEmail,
      user_id
    });
    const updatedEmail = result.data[0].email;
    this.props.updateEmail(updatedEmail);
    this.props.logout();
    this.props.history.push("/signin");
  };

  updatePass = async (currentPass, newPass, user) => {
    await axios.put("/api/updatePass", {
      currentPass,
      newPass,
      user
    });
    await this.props.logout();
    this.props.history.push("/signin");
  };

  render() {
    return (
      <div>
        {!this.props.user.currentUser ? (
          <div>
            <Login />
          </div>
        ) : (
          <div>
            {this.props.user.currentUser.id !==
            Number(this.props.match.params.id) ? (
              <div>
                <div>
                  <Login />
                </div>
              </div>
            ) : (
              <div>
                <BasicHeader />
                <Header />
                <section className="profile-section">
                  <div className="form-section">
                    <img src={userPhoto} alt="user-default" />
                    <h2>Edit Account</h2>
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        this.updateEmail(
                          this.state.newEmail,
                          this.props.user.currentUser.id
                        );
                      }}
                    >
                      <input
                        value={this.state.newEmail}
                        type="email"
                        onChange={e => {
                          this.setState({ newEmail: e.target.value });
                        }}
                        placeholder="Enter New Email"
                      />
                      <button className="updateBtn">Update email</button>
                    </form>
                    <form
                      className="password-form"
                      onSubmit={e => {
                        e.preventDefault();
                        this.updatePass(
                          this.state.currentPass,
                          this.state.newPass,
                          this.props.user.currentUser.email
                        );
                      }}
                    >
                      <input
                        value={this.state.currentPass}
                        type="password"
                        onChange={e => {
                          this.setState({ currentPass: e.target.value });
                        }}
                        placeholder="Enter Current Password"
                      />
                      <input
                        value={this.state.newPass}
                        onChange={e => {
                          this.setState({ newPass: e.target.value });
                        }}
                        type="password"
                        placeholder="Enter New Password"
                      />
                      <button className="updateBtn">Update Password</button>
                    </form>
                  </div>
                </section>
              </div>
            )}
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  updateEmail,
  logout,
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
