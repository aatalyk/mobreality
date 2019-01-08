import {
	FETCH_HOUSES_REQUESTED,
	FETCH_HOUSES_SUCCEEDED,
	FETCH_HOUSES_FAILED,
	CREATE_HOUSE_REQUESTED,
	CREATE_HOUSE_SUCCEEDED,
	CREATE_HOUSE_FAILED,
	DELETE_HOUSE_REQUESTED,
	DELETE_HOUSE_SUCCEEDED,
	DELETE_HOUSE_FAILED
} from './types';

export const fetchHousesRequested = () => ({
	type: FETCH_HOUSES_REQUESTED
});

export const fetchHousesSucceeded = housesItems => ({
	type: FETCH_HOUSES_SUCCEEDED,
	housesItems
});

export const fetchHousesFailed = error => ({
	type: FETCH_HOUSES_FAILED,
	error
});

export const createHouseRequested = house => ({
	type: CREATE_HOUSE_REQUESTED,
	house: house
});

export const createHouseSucceeded = () => ({
	type: CREATE_HOUSE_SUCCEEDED
});

export const createHouseFailed = () => ({
	type: CREATE_HOUSE_FAILED
});

export const deleteHouseRequested = id => ({
	type: DELETE_HOUSE_REQUESTED,
	id: id
});

export const deleteHouseSucceeded = () => ({
	type: DELETE_HOUSE_SUCCEEDED
});

export const deleteHouseFailed = () => ({
	type: DELETE_HOUSE_FAILED
});
