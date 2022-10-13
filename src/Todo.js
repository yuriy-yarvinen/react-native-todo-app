import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Todo = ({todo}) => {
	return (
		<View style={styles.block}>
			<Text style={styles.text}>{todo.title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	block: {
		flexDirection: 'row',
		alignItems: 'center',
		padding:15,
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 5,
		marginBottom: 10
	},
	text: {

	}
});