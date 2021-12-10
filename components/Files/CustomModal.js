import React, { useState } from 'react'
import { Modal, StyleSheet, TextInput, Button, View } from 'react-native';
import { importAllKeys, saveData } from '../../storage';

const CustomModal = ({ visible, setVisible, setFiles }) => {
	const [name, setName] = useState("")
	function leaveModal() {
		setName("");
		setVisible(false);
	}
	function createClick() {
		createFile(name)
		leaveModal()
	}
	async function createFile(name) {
		await saveData("", name);
		const keys = await importAllKeys();
		setFiles(keys);
	}
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={visible}
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
	)
}

const styles = StyleSheet.create({
	modal: {
		justifyContent: 'center',
		flex: 0.5,
	},
	textinput: {
		backgroundColor: 'white',
	}
});

export default CustomModal