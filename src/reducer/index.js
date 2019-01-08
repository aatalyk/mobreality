import { combineReducers } from 'redux';
import { housesReducer } from './housesReducer';
import { createHouseReducer } from './createHouseReducer';

export const rootReducer = combineReducers({
	houses: housesReducer,
	createHouse: createHouseReducer
});
