import React, { useState, useContext } from 'react'
<<<<<<< HEAD
import { Pressable, View, Button, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import Error from '../components/Error';
import SongContext from '../helper/context';
import { selectFileErrorMessage } from '../helper/ErrorMessages';
import { saveData } from '../storage';

const Editor = ({ navigation }) => {
	const [hasChanged, setHasChanged] = useState(false)
	const { state: { content, title }, dispatch } = useContext(SongContext)
	const hasFile = !!title
	function handleChange(newContent) {
		dispatch({ type: 'setContent', payload: { content: newContent } })
	}
	function handleSavePress() {
		saveData(content, title)
	}
	return (
		<SafeAreaView style={styles.container}>
			{hasFile ?
				<View style={styles.container}>
					<TextInput style={styles.textInput} placeholder="Enter song in chordpro format. View example song for more details. " autoCorrect={false} keyboardType='visible-password' value={content} onChangeText={handleChange} multiline spellCheck={false}></TextInput>
					<Button title="save" disabled={hasChanged} onPress={handleSavePress}></Button>
				</View>
				:
				<Error>{selectFileErrorMessage}</Error>
			}
=======
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
>>>>>>> master
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
