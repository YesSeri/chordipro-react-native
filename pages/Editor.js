import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native';
import Error from '../components/Error';
import SongContext from '../helper/state';
import { noFileErrorMessage } from '../helper/ErrorMessages';
import { saveData } from '../storage';
import TextEditor from '../components/Editor/TextEditor';
import SafeAreaViewCustom from '../components/reuseable/SafeAreaViewCustom';
import CustomModal from '../components/Editor/CustomModal';
import BottomBar from '../components/Editor/BottomBar';

const Editor = () => {
	const [hasChanged, setHasChanged] = useState(false)
	const [cursorPositions, setCursorPositions] = useState(null)
	const [visible, setVisible] = useState(false)
	const { state: { content, title }, dispatch } = useContext(SongContext)
	const hasFile = !!title
	function updateContent(newContent) {
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
					<TextEditor updateContent={updateContent}
						value={content}
						setCursorPositions={setCursorPositions}
						cursorPositions={cursorPositions}
					/>
				</View>
				:
				<Error>{noFileErrorMessage}</Error>
			}
			{/* <Button title="test" onPress={insertCurlyBrackets} color={"red"} /> */}
			<BottomBar
				setVisible={setVisible}
				hasChanged={hasChanged}
				handleSavePress={handleSavePress}
				content={content}
				cursorPositions={cursorPositions}
				updateContent={updateContent}
				setCursorPositions={setCursorPositions}
			/>
			<CustomModal setVisible={setVisible} visible={visible} />
		</SafeAreaViewCustom >
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	allButtonContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1
	},
});

export default Editor
