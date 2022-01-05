import React from 'react'
import { StyleSheet } from 'react-native';
import { MonoText } from '../../typography';

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
	else if (command === 'subtitle' || command === 'st') {
		return <Subtitle arg={arg} />
	}
	else if (command === 'comment' || command === 'c') {
		return <Comment arg={arg} />
	}
	else if (command === 'year') {
		return <Year arg={arg} />
	}
	// This is soc eoc and transpose
	return null;
}

const Year = ({ arg }) => {
	return <MonoText style={[styles.directive, styles.comment]}>Composed in: {arg}</MonoText>
}
const Comment = ({ arg }) => {
	return (
		<MonoText style={[styles.directive, styles.comment]}>{arg}</MonoText>
	)
}
const Title = ({ arg }) => {
	return (
		<MonoText style={[styles.directive, styles.title]}>{arg}</MonoText>
	)
}
const Subtitle = ({ arg }) => {
	return (
		<MonoText style={[styles.directive, styles.subtitle]}>{arg}</MonoText>
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
		fontSize: 14,
		alignSelf: "flex-start",
		paddingLeft: 2,
		paddingRight: 2,
		// borderBottomWidth: 1,
		// backgroundColor: '#333',
		// color: 'white',
		fontStyle: 'italic',
	}
});

export default Directive;