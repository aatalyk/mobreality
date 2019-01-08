import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { textStyles, colors } from '../../assets';

const propTypes = {
	leftItem: PropTypes.node,
	rightItem: PropTypes.node,
	title: PropTypes.string
};

const Header = ({ leftItem, rightItem, title }) => (
	<View>
		<View style={styles.barView} />
		<View style={styles.container}>
			<View style={styles.leftItem}>{leftItem}</View>
			<Text style={[textStyles.p, { flex: 1, textAlign: 'center' }]} numberOfLines={1}>
				{title}
			</Text>
			<View style={styles.rightItem}>{rightItem}</View>
		</View>
	</View>
);

Header.propTypes = propTypes;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		justifyContent: 'space-between',
		flexDirection: 'row',
		height: 56,
		alignItems: 'center'
	},
	leftItem: {
		marginLeft: 5,
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	rightItem: {
		alignItems: 'flex-end',
		justifyContent: 'center',
		marginRight: 5
	},
	barView: {
		height: getStatusBarHeight(),
		backgroundColor: colors.housesLightBlue
	}
});

export { Header };
