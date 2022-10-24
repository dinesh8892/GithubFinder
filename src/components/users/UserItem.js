import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
	const { login, avatar_url, html_url } = props.user;

	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				className='round-img'
				style={{ width: '60px' }}
				alt=''
			></img>
			<h4>{login}</h4>
			<div>
				<Link
					to={`/user/${login}`}
					className='btn btn-dark btn-sm my-1'
				>
					More
				</Link>
			</div>
		</div>
	);
};

UserItem.propType = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
