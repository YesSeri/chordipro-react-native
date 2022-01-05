import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ListItem = ({ onPress, children, icon }) => {
	return (
		<Pressable onPress={onPress}>
			<View>
				<Text>
					<Ionicons name={icon} style={styles.ionicon} />
					{children}
				</Text>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	ionicon: {
		padding: 3,
		color: 'black'
	}
});

export default ListItem