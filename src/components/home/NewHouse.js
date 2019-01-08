import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { textStyles, images, colors } from '../../assets';
import { Header } from '../navigation';
import { createHouseRequested } from '../../actions';

import { IconButton } from '../common';

const propTypes = {
	navigation: PropTypes.object
};

const SCREEN_WIDTH = Dimensions.get('window').width;

class NewHouseScreen extends Component {
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

	state = {
		address: '',
		owner: '',
		price: '',
		area: 0
	};

	componentDidMount() {
		this.props.navigation.setParams({ createHouse: this.createHouse });
	}

	createHouse = () => {
		const house = {
			address: this.state.address,
			owner: this.state.owner,
			price: this.state.price,
			area: this.state.area
		};

		console.warn(house);

		this.props.createHouseRequested(house);
	};

	render() {
		return (
			<ScrollView style={styles.container}>
				<TextInput
					style={styles.title}
					onChangeText={address => this.setState({ address })}
					value={this.state.address}
					placeholder="Address"
				/>
				<TextInput
					style={styles.title}
					onChangeText={owner => this.setState({ owner })}
					value={this.state.owner}
					placeholder="Owner"
				/>
				<TextInput
					style={styles.title}
					onChangeText={price => this.setState({ price })}
					value={this.state.price}
					placeholder="Price"
					keyboardType="number-pad"
				/>
				<TextInput
					style={styles.title}
					onChangeText={area => this.setState({ area })}
					value={this.state.area}
					placeholder="Area"
					keyboardType="number-pad"
				/>
			</ScrollView>
		);
	}
}

NewHouseScreen.propTypes = propTypes;

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
		...textStyles.p,
		marginHorizontal: 15,
		margin: 20
	},
	line: {
		backgroundColor: colors.soBlue,
		height: 3,
		width: SCREEN_WIDTH * 0.2,
		marginLeft: 20,
		borderRadius: 2
	}
});

const mapStateToProps = ({ createHouse }) => ({
	loading: createHouse.loading
});

export const NewHouse = connect(mapStateToProps, { createHouseRequested })(NewHouseScreen);
