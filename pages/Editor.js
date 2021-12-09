import React, { useState, useContext } from 'react'
import { Button, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import SongContext from '../helper/context';

const Editor = () => {
	const { state: { content }, dispatch } = useContext(SongContext)

	function handleChange(newContent) {
		dispatch({ type: 'setContent', payload: { content: newContent } })
	}
	return (
		<SafeAreaView style={styles.container}>
			<TextInput style={styles.textInput} autoCorrect={false} keyboardType='visible-password' value={content} onChangeText={handleChange} multiline spellCheck={false}></TextInput>
			<Button title="save"></Button>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	textInput: {
		flex: 1,
	}
});

export default Editor
