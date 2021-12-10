import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Error = ({ children }) => (
	<View style={styles.container} >
		<Text style={{ textAlign: 'center' }}>
			{children}
		</Text>
	</View>
)


const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
	}
});

export default Error