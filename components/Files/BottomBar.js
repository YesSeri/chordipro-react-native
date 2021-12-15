import React, { useState } from 'react'
import { StyleSheet, Button, View } from 'react-native';
import CustomModal from './CustomModal';

const BottomBar = ({ setFiles, setIsDeleting, isDeleting }) => {
	const [modalVisible, setModalVisible] = useState(false);

	function handleNew() {
		setModalVisible(true);
	}
	return (
		<View style={styles.container}>
			<View style={styles.allButtonContainer}>
				<View style={styles.buttonContainer}>
					<Button onPress={handleNew} style={styles.button} title='new' />
				</View>
				<View style={styles.buttonContainer}>
					<Button title={isDeleting ? "stop" : "delete"} color={isDeleting ? 'red' : 'tomato'} onPress={() => setIsDeleting(!isDeleting)} />
				</View>
			</View>
			<CustomModal visible={modalVisible} setVisible={setModalVisible} setFiles={setFiles} />
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