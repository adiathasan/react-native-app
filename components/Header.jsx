import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, pallete } from '../config/styles';

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.header_text}>GameZone</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 80,
		backgroundColor: pallete.color.primary,
	},
	header_text: {
		fontSize: 20,
		fontWeight: 'bold',
		...pallete.text,
	},
});
