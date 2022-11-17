import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS,
	SET_USERS,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case CLEAR_USERS:
			return {
				...state,
				loading: false,
				users: [],
			};
		case GET_USER:
			return {
				...state,
				loading: false,
				user: action.payload,
			};
		case SET_USERS:
			return {
				...state,
				loading: false,
				users: action.payload,
			};
		case GET_REPOS:
			return {
				...state,
				loading: false,
				repos: action.payload,
			};
		default:
			return state;
	}
};
