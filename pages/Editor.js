import React, { useContext } from 'react'
import { StyleSheet, View, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SongContext from '../helper/context';
import { SafeAreaView } from 'react-native-safe-area-context';

const Editor = () => {
	const { song, setSong } = useContext(SongContext)
	function handleChange(newSong) {
		setSong(newSong)
	}
	return (
		<SafeAreaView style={styles.container}>
			<TextInput style={styles.textInput} autoCorrect={false} value={song} onChangeText={handleChange} multiline spellCheck={false}></TextInput>
			<StatusBar style='auto' />
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
