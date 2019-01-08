import {
	CREATE_HOUSE_REQUESTED,
	CREATE_HOUSE_SUCCEEDED,
	CREATE_HOUSE_FAILED,
	DELETE_HOUSE_REQUESTED,
	DELETE_HOUSE_SUCCEEDED,
	DELETE_HOUSE_FAILED
} from '../actions';

const initialState = {
	loading: false,
	error: ''
};

export const createHouseReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_HOUSE_REQUESTED:
			return { ...state, loading: true };
		case CREATE_HOUSE_SUCCEEDED:
			return { ...state, loading: false };
		case CREATE_HOUSE_FAILED:
			return { ...state, error: action.error, loading: false };
		case DELETE_HOUSE_REQUESTED:
			return { loading: true };
		case DELETE_HOUSE_SUCCEEDED:
			return { loading: false };
		case DELETE_HOUSE_FAILED:
			return { error: action.error, loading: false };
		default:
			return state;
	}
};
