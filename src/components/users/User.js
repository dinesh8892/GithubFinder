import React, { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import Repos from '../repos/Repos';

const User = (props) => {
	const { loginId } = useParams();

	useEffect(() => {
		props.getUser(loginId);
		props.getUserRepos(loginId);
	}, []);

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
	} = props.user;

	const { loading } = props;

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
			<Repos repos={props.repos} />
		</Fragment>
	);
};

User.propTypes = {
	loading: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired,
	getUser: PropTypes.func.isRequired,
	getUserRepos: PropTypes.func.isRequired,
	repos: PropTypes.array.isRequired,
};

export default User;
