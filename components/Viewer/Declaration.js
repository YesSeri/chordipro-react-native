import React from 'react'
import { StyleSheet, Text } from 'react-native';

const Declaration = ({ command, arg }) => {
	function renderDeclaration() {
		if (command === 'soc' || command === 'start_of_chorus') {
			return null;
		}
		if (command === 'eoc' || command === 'end_of_chorus') {
			return null;
		}
		if (command === 'title' || command === 't') {
			return <Title arg={arg} />
		}
		if (command === 'subtitle' || command === 'st') {
			return <Subtitle arg={arg} />
		}
		if (command === 'comment' || command === 'c') {
			return <Comment arg={arg} />
		}
		return null;
	}
	return renderDeclaration()
}
const Comment = ({ arg }) => {
	return (
		<Text style={styles.comment}>{arg}</Text>
	)
}
const Title = ({ arg }) => {
	return (
		<Text style={styles.title}>{arg}</Text>
	)
}
const Subtitle = ({ arg }) => {
	return (
		<Text style={styles.subtitle}>{arg}</Text>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
	},
	subtitle: {
		fontSize: 15,
	},
	comment: {
		alignSelf: "flex-start",
		paddingLeft: 5,
		paddingRight: 5,
		fontSize: 12,
		backgroundColor: 'black',
		color: 'white',
	}
});

export default Declaration;