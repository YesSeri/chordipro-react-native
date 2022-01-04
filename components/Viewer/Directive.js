import React from 'react'
import { StyleSheet, Text } from 'react-native';

const Directive = ({ command, arg }) => {
	// if (command === 'soc' || command === 'start_of_chorus') {
	// 	return null;
	// }
	// if (command === 'eoc' || command === 'end_of_chorus') {
	// 	return null;
	// }
	// if (command === 'transpose') {
	// 	return null;
	// }
	if (command === 'title' || command === 't') {
		return <Title arg={arg} />
	}
	if (command === 'subtitle' || command === 'st') {
		return <Subtitle arg={arg} />
	}
	if (command === 'comment' || command === 'c') {
		return <Comment arg={arg} />
	}
	// This is soc eoc and transpose
	return null;
}
const Comment = ({ arg }) => {
	return (
		<Text style={[styles.directive, styles.comment]}>{arg}</Text>
	)
}
const Title = ({ arg }) => {
	return (
		<Text style={[styles.directive, styles.title]}>{arg}</Text>
	)
}
const Subtitle = ({ arg }) => {
	return (
		<Text style={[styles.directive, styles.subtitle]}>{arg}</Text>
	)
}

const styles = StyleSheet.create({
	directive: {
		marginTop: 5,
		marginBottom: 5,
	},
	title: {
		fontSize: 25,
	},
	subtitle: {
		fontSize: 20,
	},
	comment: {
		fontSize: 15,
		alignSelf: "flex-start",
		paddingLeft: 5,
		paddingRight: 5,
		backgroundColor: 'black',
		color: 'white',
	}
});

export default Directive;