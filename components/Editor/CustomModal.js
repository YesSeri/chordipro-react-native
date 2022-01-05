import React from 'react'
import { Button, Modal, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Heading, SubHeading } from '../../typography'
import List from './List';

const CustomModal = ({ visible, setVisible }) => {
	function leaveModal() {
		setVisible(false);
	}
	return (
		<Modal
			animationType="slide"
			// transparent={true}
			visible={visible}
		>
			<ScrollView style={styles.modal}>
				<Heading>
					Directives
				</Heading>
				<SubHeading style={{ marginBottom: 10 }}>Click to show more info</SubHeading>
				<List />
			</ScrollView>
			<Button title="Dismiss" onPress={leaveModal} />
		</Modal>
	)
}

const styles = StyleSheet.create({
	// modal: {
	// 	justifyContent: 'center',
	// 	flex: 0.5,
	// },
	// textinput: {
	// 	backgroundColor: 'white',
	// }
	infoText: {
		marginBottom: 10,
		textAlign: 'center'
	}
});

export default CustomModal