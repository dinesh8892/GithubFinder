import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			props.setAlert('Please Enter Something!', 'warning');
		} else {
			props.searchUsers(text);
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
			{props.showClear && (
				<button
					className='btn btn-light btn-block'
					onClick={props.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default Search;
