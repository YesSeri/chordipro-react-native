import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Error = ({ children }) => (
	<View style={{ justifyContent: 'center', paddingTop: 150 }} >
		<Text style={{ textAlign: 'center' }}>
			{children}
		</Text>
	</View>
)
const styles = StyleSheet.create({
});

export default Error