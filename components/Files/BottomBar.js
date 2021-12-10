import React, { useState } from 'react'
import { Modal, StyleSheet, TextInput, Button, View } from 'react-native';
import CustomModal from './CustomModal';
import DeleteButton from './DeleteButton';

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
			<View style={styles.allButtonContainer}>
				<View style={styles.buttonContainer}>
					<Button onPress={handleNew} style={styles.button} title='new' />
				</View>
				<View style={styles.buttonContainer}>
					<Button title="delete" color='tomato' />
				</View>
			</View>
			<CustomModal visible={modalVisible} setName={setName} createClick={createClick} leaveModal={leaveModal} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	allButtonContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1
	},
});

export default BottomBar