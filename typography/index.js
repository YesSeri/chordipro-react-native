import React from 'react'
import { StyleSheet, Text } from 'react-native';


export const MonoText = ({ style, children, ...restProps }) => (
	<Text style={[style, styles.text]} {...restProps}>{children}</Text>
)

export const Heading = ({ style, children, ...restProps }) => (
	<Text style={[style, styles.heading]} {...restProps}>{children}</Text>
)
export const SubHeading = ({ style, children, ...restProps }) => (
	<Text style={[style, styles.subHeading]} {...restProps}>{children}</Text>
)

// const fontFamily = Platform.OS === 'ios' ? 'Courier' : 'monospace'
const fontFamily = 'Inconsolata-Regular, Inconsolata, monospace'
const styles = StyleSheet.create({
	text: {
		fontFamily,
		fontSize: 15,
	},
	heading: {
		textAlign: 'center',
		fontSize: 30
	},
	subHeading: {
		textAlign: 'center',
		fontStyle: 'italic',
		fontSize: 15
	}
});
