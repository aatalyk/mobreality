import { createLogic } from 'redux-logic';

import {
	FETCH_HOUSES_REQUESTED,
	fetchHousesSucceeded,
	fetchHousesFailed,
	CREATE_HOUSE_REQUESTED,
	createHouseSucceeded,
	createHouseFailed,
	deleteHouseSucceeded,
	deleteHouseFailed
} from '../actions';

const url = 'http://mr-test-backend.sadek.usermd.net/houses';

const fetchHousesLogic = createLogic({
	type: FETCH_HOUSES_REQUESTED,
	process: ({ getState }, dispatch, done) => {
		fetch(url)
			.then(response => response.json())
			.then(json => {
				const houses = json['houses'];
				dispatch(fetchHousesSucceeded(houses));
			})
			.catch(error => {
				dispatch(fetchHousesFailed(error));
			})
			.then(() => done());
	}
});

const createHouseLogic = createLogic({
	type: CREATE_HOUSE_REQUESTED,
	process: ({ action }, dispatch, done) => {
		fetch(url, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				address: action.house.address,
				owner: action.house.owner,
				price: action.house.price,
				area: action.house.area
			})
		})
			.then(response => response.json())
			.then(json => {
				console.warn(json);
				dispatch(createHouseSucceeded(houses));
			})
			.catch(error => {
				dispatch(createHouseFailed(error));
			})
			.then(() => done());
	}
});

const deleteHouseLogic = createLogic({
	type: CREATE_HOUSE_REQUESTED,
	process: ({ action }, dispatch, done) => {
		const id = action.id;
		fetch(`url/${id}`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(json => {
				console.warn(json);
				dispatch(deleteHouseSucceeded(houses));
			})
			.catch(error => {
				dispatch(deleteHouseFailed(error));
			})
			.then(() => done());
	}
});

export const housesLogic = [fetchHousesLogic, createHouseLogic, deleteHouseLogic];
