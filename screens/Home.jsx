import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, pallete } from '../config/styles';

const Home = () => {
	return (
		<View style={globalStyles.container}>
			<Text style={pallete.text}>Hey</Text>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
