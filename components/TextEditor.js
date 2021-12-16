import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const TextEditor = ({ value = "", onChangeText }) => {
	return (
		<TextInput
			style={styles.textInput}
			placeholder="Enter song in chordpro format. View example song for more details."
			autoCorrect={false}
			keyboardType='visible-password'
			value={value}
			onChangeText={onChangeText}
			multiline
			spellCheck={false}
		/>

	)
}

const styles = StyleSheet.create({
});

export default TextEditor