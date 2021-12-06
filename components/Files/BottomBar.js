import React from 'react'
import { StyleSheet, Button, View } from 'react-native';

const BottomBar = () => {
	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				<Button style={styles.button} title='new' />
			</View>
			<View style={styles.buttonContainer}>
				<Button style={styles.button} title='rename' />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	buttonContainer: {
		flex: 1,
	}
});

export default BottomBar