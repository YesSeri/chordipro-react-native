import React from 'react'
import { StyleSheet, Text } from 'react-native';

export const MonoText = ({ style, children, ...restProps }) => {
	return (
		<Text numberOfLines={1} style={[style, styles.text]} {...restProps}>{children}</Text>

	)
}

export const Heading = ({ style, children, ...restProps }) => {
	return (
		<Text style={[style, styles.heading]} {...restProps}>{children}</Text>
	)
}

const styles = StyleSheet.create({
	text: {
		// fontFamily: 'monospace',
	},
	heading: {
		textAlign: 'center',
		fontSize: 30
	}
});
