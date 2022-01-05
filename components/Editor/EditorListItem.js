import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ListItem = ({ item }) => {
	const [visible, setVisible] = useState(false)
	return (
		<View style={styles.container}>
			<Pressable onPress={() => setVisible(!visible)} >
				<View key={item[0]} style={{ flexDirection: 'row' }}>
					<Text style={{ flex: '1' }}>
						{item[0]}
					</Text>
					<Text style={{ textAlign: 'right' }}>
						<Ionicons name={visible ? 'arrow-up' : 'arrow-down'} style={styles.ionicon} />
					</Text>
				</View>
				<View style={{ display: visible ? "flex" : "none" }}>
					<Text>
						Command: {item[1]}
					</Text>
					<Text>
						{item[2]}
					</Text>
				</View>
			</Pressable>
		</View >
	)
}

const styles = StyleSheet.create({
	container: { marginBottom: 4, paddingBottom: 4, textAlign: 'center', borderBottomWidth: 2, borderBottomColor: '#eee', }
});

export default ListItem