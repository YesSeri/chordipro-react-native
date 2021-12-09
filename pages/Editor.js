import React, { useState, useContext } from 'react'
import { Button, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import SongContext from '../helper/reducer';

const Editor = () => {
	const { content, setContent, title } = useContext(SongContext)
	console.log('aaaaaaaaaaa', { content, title })

	function handleChange(newSong) {
		setContent(newSong)
	}
	return (
		<SafeAreaView style={styles.container}>
			{/* <TextInput style={styles.textInput} autoCorrect={false} value={content} onChangeText={handleChange} multiline spellCheck={false}></TextInput>
			<Button title="save"></Button> */}
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
