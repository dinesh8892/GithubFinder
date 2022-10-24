import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';

const Users = (props) => {
	if (props.loading) {
		return <Spinner />;
	} else {
		return (
			<div className='grid-3'>
				{props.users.map((user) => {
					return (
						<UserItem
							user={user}
							key={user.id}
						/>
					);
				})}
			</div>
		);
	}
};

export default Users;

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};
