import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	View,
	FlatList,
} from 'react-native';

export default function App() {
	const [state, setState] = useState('Kudu');
	const [people, setPeople] = useState([
		{ name: 'shaun', _id: 1 },
		{ name: 'yoshi', _id: 2 },
		{ name: 'karan', _id: 3 },
		{ name: 'pankaj', _id: 4 },
		{ name: 'sk', _id: 5 },
		{ name: 'harry', _id: 6 },
		{ name: 'logan', _id: 7 },
	]);
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.ninja}>Hey ninja ? {state}</Text>
			</View>
			<View
				style={{
					marginTop: 10,
					color: 'white',
					borderWidth: 2,
					borderBottomColor: 'darkcyan',
				}}>
				<TextInput
					placeholder='enter name'
					placeholderTextColor='darkcyan'
					style={{ color: styles.ninja.color }}
					onChangeText={(value) => setState(value)}
				/>
			</View>
			<View
				style={{
					marginTop: 10,
				}}>
				<Button
					color='orangered'
					title='reveal name'
					onPress={() => setState('Soad')}
				/>
			</View>
			<FlatList
				keyExtractor={(item) => item._id}
				data={people}
				renderItem={({ item }) => (
					<Text style={{ ...styles.item, ...styles.ninja }}>{item.name}</Text>
				)}
			/>

			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	ninja: {
		color: 'white',
	},
	container: {
		flex: 1,
		backgroundColor: '#000',
		color: 'white',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	header: {
		backgroundColor: 'darkcyan',
		padding: 20,
	},
	item: {
		marginTop: 16,
		padding: 20,
		backgroundColor: 'darkcyan',
		fontSize: 24,
	},
});
