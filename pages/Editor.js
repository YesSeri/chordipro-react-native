import React, { useContext } from 'react'
import { StyleSheet, TextInput } from 'react-native';
import SongContext from '../helper/context';
import { SafeAreaView } from 'react-native-safe-area-context';

const Editor = () => {
	const { content, setContent } = useContext(SongContext)
	function handleChange(newSong) {
		setContent(newSong)
	}
	return (
		<SafeAreaView style={styles.container}>
			<TextInput style={styles.textInput} autoCorrect={false} value={song} onChangeText={handleChange} multiline spellCheck={false}></TextInput>
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
