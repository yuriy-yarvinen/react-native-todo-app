import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Navbar = ({title}) => {
	return (
		<View style={styles.navbar}>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	navbar: {
		height: 80,
		backgroundColor: "#3949ab",
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingBottom: 15
	},
	text: {
		color: '#fff',
		fontSize: 18
	},
});