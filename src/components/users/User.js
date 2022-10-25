import React, { Component, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import Repos from '../repos/Repos';

// function withParams(Component) {
// 	return (props) => {
// 		{
// 			console.log(props);
// 		}
// 		<Component
// 			params={useParams()}
// 			{...props}
// 		/>;
// 	};
// }

class User extends React.Component {
	componentDidMount() {
		const { login } = this.props.params;
		console.log('going to trigger didMount');
		this.props.getUser(login);
		this.props.getUserRepos(login);
	}

	static propTypes = {
		loading: PropTypes.bool.isRequired,
		user: PropTypes.object.isRequired,
		getUser: PropTypes.func.isRequired,
		getUserRepos: PropTypes.func.isRequired,
		repos: PropTypes.array.isRequired,
	};

	render() {
		const {
			name,
			avatar_url,
			bio,
			location,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable,
			company,
		} = this.props.user;

		const { loading } = this.props;

		if (loading) return <Spinner />;

		return (
			<Fragment>
				<Link
					to='/'
					className='btn btn-light'
				>
					Back To Search
				</Link>
				Hireable:{' '}
				{hireable ? (
					<FontAwesomeIcon
						icon={faCheck}
						className={`text-success`}
					></FontAwesomeIcon>
				) : (
					<FontAwesomeIcon
						icon={faTimesCircle}
						className={`text-danger`}
					></FontAwesomeIcon>
				)}
				<div className='card grid-2'>
					<div className='all-center'>
						<img
							src={avatar_url}
							className='round-img'
							alt='profile picture'
							style={{ width: '150px' }}
						/>
						<h1>{name}</h1>
						<p>Location: {location}</p>
					</div>
					<div>
						{bio && (
							<Fragment>
								<h3>Bio</h3>
								<p>{bio}</p>
							</Fragment>
						)}
						<a
							href={html_url}
							className='btn btn-dark my-1'
						>
							Visit Github Profile
						</a>
						<ul>
							<li>
								{login && (
									<Fragment>
										<strong>Username: </strong>
										{login}
									</Fragment>
								)}
							</li>
							<li>
								{company && (
									<Fragment>
										<strong>Company: </strong>
										{company}
									</Fragment>
								)}
							</li>
							<li>
								{blog && (
									<Fragment>
										<strong>Website: </strong>
										{blog}
									</Fragment>
								)}
							</li>
						</ul>
					</div>
				</div>
				<div className='card text-center'>
					<div className='badge badge-primary'>
						Followers: {followers}
					</div>
					<div className='badge badge-success'>
						Following: {following}
					</div>
					<div className='badge badge-light'>
						Public Repos: {public_repos}
					</div>
					<div className='badge badge-dark'>
						Public Gists: {public_gists}
					</div>
				</div>
				<Repos repos={this.props.repos} />
			</Fragment>
		);
	}
}

// to use hooks in class component, wrap class component in function and pass the hooks return as prop
export default (props) => (
	<User
		{...props}
		params={useParams()}
	/>
);
