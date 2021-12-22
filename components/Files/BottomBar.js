import React, { useState } from 'react'
import { StyleSheet, Button, View } from 'react-native';
import { colors } from '../../helper/designContext';
import CustomModal from './CustomModal';

const BottomBar = ({ navigation, setFiles, setIsDeleting, isDeleting }) => {
	const [modalVisible, setModalVisible] = useState(false);
	React.useEffect(() => {
		const unsubscribe = navigation.addListener('blur', () => {
			setIsDeleting(false);
		});

		return unsubscribe;
	}, [navigation]);

	function handleNew() {
		setModalVisible(true);
		setIsDeleting(false);
	}
	return (
		<View style={styles.container}>
			<View style={styles.allButtonContainer}>
				<View style={styles.buttonContainer}>
					<Button onPress={handleNew} style={styles.button} title='new' color={colors.color2} />
				</View>
				<View style={styles.buttonContainer}>
					<Button title={isDeleting ? "stop" : "delete"} color={isDeleting ? 'red' : colors.color3} onPress={() => setIsDeleting(!isDeleting)} />
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