import React from 'react'
import { StyleSheet, Text } from 'react-native';

const MonoText = ({ style, children, ...restProps }) => {
	return (
		<Text numberOfLines={1} style={[style, styles.text]} {...restProps}>{children}</Text>

	)
}

const styles = StyleSheet.create({
	text: {
		fontFamily: 'Courier',
	},
});

export default MonoText