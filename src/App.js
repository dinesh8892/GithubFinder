import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
		user: {},
		repos: [],
	};

	async componentDidMount() {
		this.setState({ loading: true });

		const res =
			await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
		&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		this.setState({ loading: false, users: res.data });
	}

	// getting the text from search form and searching for users.
	searchUsers = async (text) => {
		this.setState({ loading: true });
		const res =
			await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
		&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		this.setState({ loading: false, users: res.data.items });
	};

	clearUsers = () => {
		this.setState({ loading: false, users: [] });
	};

	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });
		setTimeout(() => {
			this.setState({ alert: null });
		}, 5000);
	};

	getUser = async (username) => {
		this.setState({ loading: true });
		const res =
			await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
		&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		this.setState({ loading: false, user: res.data });
	};

	getUserRepos = async (username) => {
		this.setState({ loading: true });
		const res =
			await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
		&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		this.setState({ loading: false, repos: res.data });
	};

	render() {
		return (
			<Router>
				<div className='App'>
					<Navbar title='Github Finder' />
					<div className='container'>
						<Alert alert={this.state.alert} />
						<Routes>
							<Route
								exact
								path='/'
								element={
									<Fragment>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											showClear={
												this.state.users.length > 0
													? true
													: false
											}
											setAlert={this.setAlert}
										/>
										<Users
											loading={this.state.loading}
											users={this.state.users}
										/>
									</Fragment>
								}
							/>
							<Route
								exact
								path='/about'
								element={<About />}
							/>
							<Route
								exact
								path='/user/:login'
								element={
									<User
										{...this.props}
										getUser={this.getUser}
										user={this.state.user}
										loading={this.state.loading}
										getUserRepos={this.getUserRepos}
										repos={this.state.repos}
									/>
								}
							/>
						</Routes>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
