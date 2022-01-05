import React from 'react'
import { StyleSheet, Pressable, Button, View, Text } from 'react-native';
import { colors } from '../../helper/designContext';

const createNewContent = (content, pos, text) => {
	return content.slice(0, pos) + text + content.slice(pos)
}
const BottomBar = ({
	setVisible,
	hasChanged,
	handleSavePress,
	content,
	cursorPositions,
	updateContent,
	// setCursorPositions,
}) => {
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
					<Button title="DIRECTIVE {:}" onPress={insertCurlyBrackets} color={colors.color4} />
				</View>
				<View style={[styles.buttonContainer, styles.lowerButton]}>
					<Button title="CHORD []" onPress={insertSquareBrackets} color={colors.color3} />
				</View>

				<View style={[styles.buttonContainer, styles.lowerButton, { justifyContent: 'center', textAlign: 'center', backgroundColor: colors.color1 }]}>
					<Pressable uppercase={false} title="" onPress={insertComment}  >
						<Text style={{ color: 'white' }}>{"COMMENT {c:}"}</Text>
					</Pressable>
				</View>
			</View>

			<View style={styles.allButtonContainer}>
				<View style={styles.buttonContainer}>
					<Button title="info" onPress={() => setVisible(true)} color={colors.color5} />
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