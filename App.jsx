import React, { useState } from 'react';
import {
	FlatList,
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Button,
	Alert,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Header from './components/Header';

const App = () => {
	const [text, setText] = useState('');
	const [todos, setTodos] = useState([
		{ text: 'buy coffee', _id: '1' },
		{ text: 'create an app', _id: '2' },
		{ text: 'play on the switch', _id: '3' },
	]);

	Keyboard.listeners('');
	const handleTodo = () => {
		if (text !== '') {
			setTodos((prevTodos) => [
				{ text, _id: Math.random() + '' },
				...prevTodos,
			]);
			setText('');
			Keyboard.dismiss();
		} else {
			Alert.alert('OOPS!', 'To Dos Must Not Be Empty');
		}
	};

	const handleDelete = (id) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					<View style={styles.form}>
						<TextInput
							value={text}
							style={styles.input}
							onChangeText={(value) => setText(value)}
						/>
						<Button title='add todo' color='#007180' onPress={handleTodo} />
					</View>
					<View style={styles.lists}>
						<FlatList
							keyExtractor={(item) => item._id}
							data={todos}
							renderItem={({ item }) => {
								return (
									<View style={styles.list}>
										<Text style={styles.todo}>{item.text}</Text>
										<TouchableOpacity
											style={styles.delete}
											onPress={() => handleDelete(item._id)}>
											<MaterialIcons name='delete' size={24} color='#b8052c' />
										</TouchableOpacity>
									</View>
								);
							}}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
	},
	content: {
		flex: 1,
		padding: 40,
	},
	lists: {
		flex: 1,
		marginTop: 20,
	},
	list: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	form: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'center',
		flexDirection: 'row',
		marginBottom: 10,
	},
	input: {
		padding: 3.5,
		flex: 1,
		borderWidth: 1,
		borderBottomColor: '#00ff95',
		color: '#fff',
		backgroundColor: '#012329',
	},
	todo: {
		color: 'white',
		borderWidth: 1,
		borderColor: '#00ffff',
		padding: 16,
		borderRadius: 10,
		backgroundColor: 'darkcyan',
		marginBottom: 10,
		shadowColor: '#0485fd',
		shadowRadius: 10,
		flex: 1,
	},
	delete: {
		backgroundColor: '#bcf5f5',
		padding: 15,
		marginLeft: 4,
		borderRadius: 10,
		alignSelf: 'flex-start',
	},
});
