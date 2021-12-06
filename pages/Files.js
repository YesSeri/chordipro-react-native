import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import BottomBar from '../components/Files/BottomBar';

const Files = () => {
	return (
		<View style={styles.container}>
			<Text>Files</Text>
			<BottomBar />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'space-between'
	},
});

export default Files
