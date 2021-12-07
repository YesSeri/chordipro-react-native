import React, { useState } from 'react'
import { Modal, StyleSheet, TextInput, Button, View } from 'react-native';
import { saveData } from '../../storage'

const BottomBar = ({ createFile }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [name, setName] = useState("");

	function handleNew() {
		setModalVisible(true);
	}
	function createClick() {
		createFile(name)
		leaveModal()
	}
	function leaveModal() {
		setName("");
		setModalVisible(false);
	}
	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				<Button onPress={handleNew} style={styles.button} title='new' />
			</View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
			>
				<View style={styles.modal}>
					<TextInput
						style={styles.textinput}
						// style={{ paddingBottom: 20 }}
						placeholder="new file name"
						onChangeText={setName}></TextInput>
					<View>
						<Button title="create" onPress={createClick} />
					</View>
					<View>
						<Button title="cancel" color="tomato" onPress={leaveModal} />
					</View>
				</View>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	buttonContainer: {
		flex: 1,
	},
	modal: {
		justifyContent: 'center',
		flex: 0.5,
	},
});

export default BottomBar