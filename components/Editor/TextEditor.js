import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const TextEditor = ({ value = "", updateContent, style, setCursorPositions, cursorPositions }) => {
	function handleChange(e) {
		setCursorPositions(e.nativeEvent.selection)
	}
	return (
		<TextInput
			style={[styles.textInput, style]}
			placeholder="Enter song in chordpro format. View example song for more details."
			autoCorrect={false}
			onChangeText={updateContent}
			multiline
			spellCheck={false}
			// selection={{ cursorPositions }}
			onSelectionChange={handleChange}
			value={value}
		>
		</TextInput>

	)
}

const styles = StyleSheet.create({
	textInput: { flex: 1 }
});

export default TextEditor