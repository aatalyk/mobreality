import React, { Component } from 'react';
import { View, ScrollView, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { textStyles, images, colors } from '../../assets';
import { Header } from '../navigation';
import { deleteHouseRequested } from '../../actions';

import { IconButton } from '../common';

const propTypes = {
	navigation: PropTypes.object,
	deleteHouseRequested: PropTypes.func
};

const SCREEN_WIDTH = Dimensions.get('window').width;

class HouseDetailScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		return {
			header: () => (
				<Header
					title="House"
					leftItem={<IconButton imgSource={images.back} onPress={() => navigation.goBack()} />}
					rightItem={<IconButton imgSource={images.home} onPress={() => params.createHouse()} />}
				/>
			)
		};
	};

	componentDidMount() {
		this.props.navigation.setParams({ createHouse: this.createHouse });
		this.setHeaderTitle();
	}

	setHeaderTitle = () => {
		const item = this.getItem();
		this.props.navigation.setParams({ title: item.owner });
	};

	getItem = () => this.props.navigation.getParam('item', {});

	createHouse = () => this.props.navigation.navigate('NewHouse');

	onPress = () => {
		console.warn('Delete');
		this.props.deleteHouseRequested();
	};

	render() {
		const item = this.props.navigation.getParam('item');

		return (
			<ScrollView style={styles.container}>
				<Text style={styles.title}>{item.address}</Text>
				<View style={styles.line} />
				<Text style={styles.description}>{item.owner}</Text>
				<Button title="Delete" onPress={this.onPress} />
			</ScrollView>
		);
	}
}

HouseDetailScreen.propTypes = propTypes;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		backgroundColor: 'white'
	},
	image: {
		width: SCREEN_WIDTH,
		height: 200
	},
	title: {
		...textStyles.h2,
		marginHorizontal: 15,
		margin: 20
	},
	line: {
		backgroundColor: colors.soBlue,
		height: 3,
		width: SCREEN_WIDTH * 0.2,
		marginLeft: 20,
		borderRadius: 2
	},
	description: {
		...textStyles.p,
		marginHorizontal: 15,
		marginTop: 10,
		marginBottom: 20,
		lineHeight: 30
	}
});

const mapStateToProps = ({ createHouse }) => ({
	loading: createHouse.loading
});

export const HouseDetail = connect(mapStateToProps, { deleteHouseRequested })(HouseDetailScreen);
