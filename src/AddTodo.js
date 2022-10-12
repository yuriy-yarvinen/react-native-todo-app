import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const AddTodo = (props) => {
	return (
		<View style={styles.block}>
			<TextInput style={styles.input} />
			<Button style={styles.button} title="Добавить" />
		</View>
	);
}

const styles = StyleSheet.create({
	block: {
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginTop: 10
	},
	input: {
		width: '70%',
		borderBottomWidth: 2,
		borderStyle: 'solid',
		borderBottomColor: '#3949ab',
		color: '#000',
		padding: 5
	},
	button:{
		color: '#fff',
	}
});