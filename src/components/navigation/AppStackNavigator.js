import { createStackNavigator } from 'react-navigation';

import { Houses, HouseDetail, NewHouse } from '../home';

const stack = {
	Houses: {
		screen: Houses
	},
	HouseDetail: {
		screen: HouseDetail
	},
	NewHouse: {
		screen: NewHouse
	}
};

export const AppStackNavigator = createStackNavigator(
	{
		...stack
	},
	{
		initialRouteName: 'Houses'
	}
);
