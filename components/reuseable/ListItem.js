import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ListItem = ({ onPress, children, icon }) => {
	return (
		<Pressable onPress={onPress} style={{ marginTop: 10 }}>
			<Text >
				<Ionicons name={icon} style={styles.ionicon} />
				<Text style={styles.text}>
					{children}
				</Text>
			</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	text: {
		color: 'black',
		marginBottom: 20,
		fontSize: 18,
	},
	ionicon: {
		fontSize: 18,
		color: 'black'
	}
});

export default ListItem