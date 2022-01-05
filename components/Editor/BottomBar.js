import React from 'react'
import { StyleSheet, Button, View } from 'react-native';
import { colors } from '../../helper/designContext';

const createNewContent = (content, pos, text) => {
	return content.slice(0, pos) + text + content.slice(pos)
}
const BottomBar = ({ setVisible, hasChanged, handleSavePress, content, cursorPositions, updateContent, setCursorPositions }) => {
	function insertCurlyBrackets() {
		const newContent = createNewContent(content, cursorPositions.start, "{: }")
		updateContent(newContent)
	}
	function insertSquareBrackets() {
		const newContent = createNewContent(content, cursorPositions.start, "[]")
		updateContent(newContent)
	}
	function insertComment() {
		const newContent = createNewContent(content, cursorPositions.start, "{comment: }")
		updateContent(newContent)
	}
	return (
		<View>
			<View style={[styles.allButtonContainer]}>
				<View style={[styles.buttonContainer, styles.lowerButton]}>
					<Button title="Directive { : }" onPress={insertCurlyBrackets} color="#335" />
				</View>
				<View style={[styles.buttonContainer, styles.lowerButton]}>
					<Button title="Chord [ ]" onPress={insertSquareBrackets} color="#353" />
				</View>
				<View style={[styles.buttonContainer, styles.lowerButton]}>
					<Button title="Comment { c : }" onPress={insertComment} color="#533" />
				</View>
			</View>

			<View style={styles.allButtonContainer}>
				<View style={styles.buttonContainer}>
					<Button title="info" onPress={() => setVisible(true)} color={colors.color1} />
				</View>
				<View style={styles.buttonContainer}>
					<Button title="save" disabled={!hasChanged} onPress={handleSavePress} color={colors.color2} />
				</View>
			</View>


		</View>

	)
}

const styles = StyleSheet.create({
	allButtonContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
	},
	lowerButton: {
		marginTop: 4,
		marginLeft: 2,
		marginRight: 2,
		marginBottom: 4,
	}
});

export default BottomBar