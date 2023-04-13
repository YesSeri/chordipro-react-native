import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const TextEditor = ({ value = "",
	updateContent,
	style,
	setCursorPositions,
}) => {
	function handleChange(e) {
		// console.log(e.native.selection)
		setCursorPositions({ start: e.target.selectionStart })
	}
	return (
		<TextInput
			style={[styles.textInput, style]}
			placeholder="Enter song in chordpro format. View example song for more details."
			autoCorrect={false}
			onChangeText={updateContent}
			multiline
			spellCheck={false}
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