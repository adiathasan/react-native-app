import React from 'react';
import {
	StyleSheet,
	View,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import { pallete } from './config/styles';
import Home from './screens/Home';

const App = () => {
	let [fontsLoaded] = useFonts({
		'n-regular': require('./assets/fonts/Nunito-Regular.ttf'),
		'n-bold': require('./assets/fonts/Nunito-Bold.ttf'),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.container}>
					<Header />
					<Home />
				</View>
			</TouchableWithoutFeedback>
		);
	}
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: pallete.color.dark,
	},
	content: {
		flex: 1,
		padding: 40,
	},
});
