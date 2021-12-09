import React, { useState, useContext } from 'react'
import { Pressable, View, Button, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import Error from '../components/Error';
import SongContext from '../helper/context';
import { selectFileErrorMessage } from '../helper/ErrorMessages';
import { saveData } from '../storage';

const Editor = ({ navigation }) => {
	const [hasChanged, setHasChanged] = useState(false)
	const { state: { content, title }, dispatch } = useContext(SongContext)

	function handleChange(newContent) {
		dispatch({ type: 'setContent', payload: { content: newContent } })
	}
	function handleSavePress() {
		saveData(content, title)
	}
	return (
		<SafeAreaView style={styles.container}>
			{title ?
				<View>
					<TextInput style={styles.textInput} autoCorrect={false} keyboardType='visible-password' value={content} onChangeText={handleChange} multiline spellCheck={false}></TextInput>
					<Button title="save" disabled={hasChanged} onPress={handleSavePress}></Button>
				</View>
				:
				<Error>{selectFileErrorMessage}</Error>
			}
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
