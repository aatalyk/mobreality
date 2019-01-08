import React, { Component } from 'react';
import { View, FlatList, RefreshControl, StyleSheet, Button, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchHousesRequested } from '../../actions';
import { PlaceHolderList } from '../common';
import { Header } from '../navigation';
import { colors, textStyles, fonts, images } from '../../assets';

const propTypes = {
	navigation: PropTypes.object,
	housesItems: PropTypes.array,
	fetchHousesRequested: PropTypes.func,
	loading: PropTypes.bool
};

class HousesScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: () => <Header title="Home" leftItem={null} rightItem={null} />
		};
	};

	componentDidMount() {
		this.props.fetchHousesRequested();
	}

	renderItem = ({ item }) => {
		return (
			<TouchableOpacity onPress={() => this.onPress(item)}>
				<View style={styles.detailContainer}>
					<View style={styles.titleContainer}>
						<Image source={images.home} style={styles.imageLeft} />
						<Text style={styles.title}>{item.address}</Text>
						<Image source={images.right} style={styles.imageRight} />
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	keyExtractor = (_, index) => index + '';

	renderSeparator = () => <View style={styles.separator} />;

	onPress = item => this.props.navigation.navigate('HouseDetail', { item });

	render() {
		const { loading, housesItems } = this.props;
		console.warn(housesItems);
		return loading && housesItems.length === 0 ? (
			<View style={styles.placeHolderContainer}>
				<PlaceHolderList />
			</View>
		) : (
			<View style={styles.container}>
				<FlatList
					data={housesItems}
					renderItem={this.renderItem}
					keyExtractor={this.keyExtractor}
					ItemSeparatorComponent={this.renderSeparator}
					refreshControl={<RefreshControl refreshing={loading} onRefresh={this.onRefresh} />}
				/>
			</View>
		);
	}
}

HousesScreen.propTypes = propTypes;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.soLightBlue
	},
	placeHolderContainer: {
		flex: 1,
		backgroundColor: 'white'
	},
	detailContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 10,
		marginBottom: 0,
		backgroundColor: 'white',
		minHeight: 100,
		borderRadius: 10
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 20
	},
	title: {
		flex: 1,
		...textStyles.p
	},
	imageLeft: {
		width: 30,
		height: 30,
		margin: 10
	},
	imageRight: {
		width: 20,
		height: 20,
		margin: 10
	},
	separator: {
		height: 0.5,
		backgroundColor: colors.grayUltraLight,
		marginLeft: 10,
		marginRight: 10
	}
});

const mapStateToProps = ({ houses }) => ({
	housesItems: houses.housesItems,
	loading: houses.loading
});

export const Houses = connect(mapStateToProps, { fetchHousesRequested })(HousesScreen);
