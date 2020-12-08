import { StyleSheet } from 'react-native';

export const pallete = {
	color: {
		dark: '#000',
		primary: '#0698bd',
		text: '#fff',
	},
	fonts: {
		regualr: 'n-regular',
		bold: 'n-bold',
	},
	text: {
		lineHeight: 10,
		fontFamily: 'n-regular',
		marginVertical: 8,
		color: '#fff',
	},
};

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
	},
});
