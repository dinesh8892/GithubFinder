import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import githubContext from '../../context/github/githubContext';

const Users = (props) => {
	const GithubContext = useContext(githubContext);

	if (GithubContext.loading) {
		return <Spinner />;
	} else {
		return (
			<div className='grid-3'>
				{GithubContext.users.map((user) => {
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
