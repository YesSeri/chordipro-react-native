import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const TextEditor = ({ value = "", onChangeText, style }) => {
	return (
		<TextInput
			style={[styles.textInput, style]}
			placeholder="Enter song in chordpro format. View example song for more details."
			autoCorrect={false}
			value={value}
			onChangeText={onChangeText}
			multiline
			spellCheck={false}
		/>

	)
}

const styles = StyleSheet.create({
	textInput: { flex: 1 }
});

export default TextEditor