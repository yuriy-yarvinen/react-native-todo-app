import React from "react";
import { View, StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onRemove }) => {

	// const onPress = () => {
	// 	if(value.trim() != ''){
	// 		onSubmit(value)
	// 		setValue('')
	// 	}
	// 	else{
	// 		// error
	// 		Alert.alert('Введите название дела')
	// 	}
	// }

	// return (
	// 	<View style={styles.block}>
	// 		<Text style={styles.text}>{todo.title}</Text>
	// 		<Pressable style={styles.button} onPress={onPress}>
	// 			<Text style={styles.textInButton}>Удалить</Text>
	// 		</Pressable>
	// 	</View>
	// );
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={() => console.log('pressed', todo.id)}
			onLongPress={() => onRemove(todo.id)}
		>
			<View style={styles.block}>
				<Text style={styles.text}>{todo.title}</Text>
				<Pressable style={styles.button} onPress={() => onRemove(todo.id)}>
					<Text style={styles.textInButton}>Удалить</Text>
				</Pressable>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	block: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 15,
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 5,
		marginBottom: 10
	},
	text: {
		flexWrap: 'wrap',
		width: '70%'
	},
	button: {
		padding: 5,
		backgroundColor: '#F9627D',
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 5
	},
	textInButton: {
		fontSize: 14,
		color: '#fff',
	}
});