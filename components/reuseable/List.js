import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';

const List = ({ children }) => {
	return (
		<View style={styles.container}>
			<ScrollView style={styles.innerContainer}>
				{children}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	innerContainer: {
		alignSelf: 'center',
	},
	container: {
		flex: 1,
	}
});

export default List
