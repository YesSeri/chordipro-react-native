import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Finder = ({ navigation }) => {
	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
		});
		// Return the function to unsubscribe from the event so it gets removed on unmount
		return unsubscribe;
	}, [navigation]);
	return (
		<View>
			<Text>FINDER</Text>
		</View>
	)
}

const styles = StyleSheet.create({
});

export default Finder