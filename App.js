import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';

import { AppStackNavigator } from './src/components/navigation';
import { store } from './src/store';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppStackNavigator />
			</Provider>
		);
	}
}
