import React, { useState, useContext } from 'react'
import { View, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Error from '../components/Error';
import SongContext from '../helper/state';
import { noFileErrorMessage } from '../helper/ErrorMessages';
import { saveData } from '../storage';
import TextEditor from '../components/TextEditor';

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
					<TextEditor onChangeText={handleChange} value={content} />
					<Button title="save" disabled={!hasChanged} onPress={handleSavePress} />
				</View>
				:
				<Error>{noFileErrorMessage}</Error>
			}
		</SafeAreaView >
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
