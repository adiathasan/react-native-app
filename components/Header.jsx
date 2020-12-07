import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.header_text}>To Do Pro</Text>
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
		backgroundColor: '#18adda86',
		color: '#fff',
	},
	header_text: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#fff',
		fontStyle: 'italic',
	},
});
