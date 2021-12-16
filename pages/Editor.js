import React, { useState, useContext } from 'react'
import { View, Button, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Error from '../components/Error';
import SongContext from '../helper/state';
import { noFileErrorMessage } from '../helper/ErrorMessages';
import { saveData } from '../storage';

const Editor = () => {
	const [hasChanged, setHasChanged] = useState(false)
	const { state: { content, title }, dispatch } = useContext(SongContext)
	const hasFile = !!title
	function handleChange(newContent) {
		setHasChanged(true);
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
					<Button title="save" disabled={!hasChanged} onPress={handleSavePress}></Button>
				</View>
				:
				<Error>{noFileErrorMessage}</Error>
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
