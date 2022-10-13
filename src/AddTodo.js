import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {

	const [value, setValue] = useState('');

	const pressHandler = () => {
		if(value.trim() != ''){
			onSubmit(value)
			setValue('')
		}
		else{
			// error
			Alert.alert('Введите название дела')
		}
	}

	return (
		<View style={styles.block}>
			<TextInput 
			style={styles.input} 
			onChangeText={setValue} 
			// onChangeText={text => setValue(text)} 
			value={value} 
			placeholder="Введите название дела" 
			autoCorrect={false}
			autoCapitalize="none"
			/>
			<Button style={styles.button} title="Добавить" onPress={pressHandler} />
		</View>
	);
}

const styles = StyleSheet.create({
	block: {
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: 15
	},
	input: {
		width: '70%',
		borderBottomWidth: 2,
		borderStyle: 'solid',
		borderBottomColor: '#3949ab',
		color: '#000',
		padding: 5
	},
	button: {
		color: '#fff',
	}
});