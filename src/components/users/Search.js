import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import githubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = (props) => {
	const GithubContext = useContext(githubContext);
	const alertContext = useContext(AlertContext);

	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			console.log('text is empty');
			alertContext.setAlert('Please Enter Something!', 'warning');
		} else {
			GithubContext.searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form
				className='form'
				onSubmit={handleSubmit}
			>
				<input
					type='text'
					name='text'
					placeholder='Search Users...'
					value={text}
					onChange={handleChange}
				></input>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				></input>
			</form>
			{GithubContext.users.length > 0 && (
				<button
					className='btn btn-light btn-block'
					onClick={GithubContext.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
