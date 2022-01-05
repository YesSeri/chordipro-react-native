import React, { useState, useContext } from 'react'
import { View, Button, StyleSheet } from 'react-native';
import Error from '../components/Error';
import SongContext from '../helper/state';
import { noFileErrorMessage } from '../helper/ErrorMessages';
import { saveData } from '../storage';
import TextEditor from '../components/Editor/TextEditor';
import SafeAreaViewCustom from '../components/reuseable/SafeAreaViewCustom';
import CustomModal from '../components/Editor/CustomModal';

const Editor = () => {
	const [hasChanged, setHasChanged] = useState(false)
	const [visible, setVisible] = useState(false)
	const { state: { content, title }, dispatch } = useContext(SongContext)
	const hasFile = !!title
	function handleChange(newContent) {
		setHasChanged(true);
		dispatch({ type: 'setContent', payload: { content: newContent } })
	}
	function handleSavePress() {
		saveData(content, title);
		setHasChanged(false);
	}
	return (
		<SafeAreaViewCustom style={styles.container}>
			{hasFile ?
				<View style={styles.container}>
					<View style={styles.container}>
						<TextEditor onChangeText={handleChange} value={content} />
					</View>
					<Button title="save" disabled={!hasChanged} onPress={handleSavePress} />
				</View>
				:
				<>
					<Error>{noFileErrorMessage}</Error>
				</>
			}
			<CustomModal setVisible={setVisible} visible={visible} />
			<Button title="info" onPress={() => setVisible(true)} />
		</SafeAreaViewCustom >
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Editor
