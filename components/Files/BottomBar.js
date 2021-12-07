import React, { useState } from 'react'
import { Modal, StyleSheet, TextInput, Button, View } from 'react-native';
import { setData } from '../../storage'

const BottomBar = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [name, setName] = useState("");
	function handleNewClick() {
		setModalVisible(true);
	}
	function createFile() {
		setData(name, '')
	}
	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				<Button onPress={handleNewClick} style={styles.button} title='new' />
			</View>
			<Modal
				animationType="slide"
				// transparent={true}
				visible={modalVisible}
			>
				<View style={styles.modal}>
					<TextInput
						style={styles.textinput}
						// style={{ paddingBottom: 20 }}
						placeholder="new file name"
						onChangeText={setName}></TextInput>
					<View>
						<Button title="create" onPress={createFile} />
					</View>
					<View>
						<Button title="cancel" color="tomato" onPress={() => {
							setName("");
							setModalVisible(false);
						}} />
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