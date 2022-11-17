import React, { Fragment, useContext, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import Alert from './components/layouts/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import githubContext from './context/github/githubContext';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {
	const GithubContext = useContext(githubContext);

	useEffect(() => {
		GithubContext.setUsers();
	}, []);

	return (
		<Router>
			<div className='App'>
				<Navbar title='Github Finder' />
				<div className='container'>
					<Alert />
					<Routes>
						<Route
							exact
							path='/'
							element={
								<Fragment>
									<Home />
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
							path='/user/:loginId'
							element={<User />}
						/>
						<Route
							path='*'
							element={<NotFound />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
