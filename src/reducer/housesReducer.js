import {
	FETCH_HOUSES_REQUESTED,
	FETCH_HOUSES_SUCCEEDED,
	FETCH_HOUSES_FAILED,
	CREATE_HOUSE_REQUESTED
} from '../actions';

const initialState = {
	housesItems: [],
	loading: false,
	error: ''
};

export const housesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_HOUSES_REQUESTED:
			return { ...state, loading: true };
		case FETCH_HOUSES_SUCCEEDED:
			return { ...state, housesItems: action.housesItems, loading: false };
		case FETCH_HOUSES_FAILED:
			return { ...state, error: action.error, loading: false };
		default:
			return state;
	}
};
