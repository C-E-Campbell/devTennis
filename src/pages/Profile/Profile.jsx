import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateEmail, logout, login } from "../../redux/actions";
import axios from "axios";
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
	};

	render() {
		return (
			<div>
				{!this.props.user.currentUser ? (
					<div>
						<h3>Login</h3>
						<Link to='/signin'>GO TO LOGIN</Link>
					</div>
				) : (
					<div>
						<h2>Current Email: {this.props.user.currentUser.email}</h2>
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
								type='email'
								onChange={e => {
									this.setState({ newEmail: e.target.value });
								}}
								placeholder='Enter New Email'
							/>
							<button>Update email</button>
						</form>
						<form
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
								type='password'
								onChange={e => {
									this.setState({ currentPass: e.target.value });
								}}
								placeholder='Enter Current Password'
							/>
							<input
								value={this.state.newPass}
								onChange={e => {
									this.setState({ newPass: e.target.value });
								}}
								type='password'
								placeholder='Enter New Password'
							/>
							<button>Update Password</button>
						</form>
					</div>
				)}
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Profile);
