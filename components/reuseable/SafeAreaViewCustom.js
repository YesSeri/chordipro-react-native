import React from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeAreaViewCustom = ({ children, restProps }) => {
	return (
		<SafeAreaView style={styles.container} {...restProps}>{children}</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
});

export default SafeAreaViewCustom