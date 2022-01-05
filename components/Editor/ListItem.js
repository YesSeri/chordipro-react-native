import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

const ListItem = ({ item }) => {
	const [visible, setVisible] = useState(false)
	return (
		<View style={styles.container}>
			<Text key={item[0]} onPress={() => setVisible(!visible)}>
				{item[0]}
				{/* {arr[1] ? " alt " + arr[1] : ""} */}
			</Text>
			<View style={{ display: visible ? "flex" : "none" }}>
				<Text>
					Command: {item[1]}
				</Text>
				<Text>
					{item[2]}
				</Text>
			</View>
		</View >
	)
}

const styles = StyleSheet.create({
	container: { marginBottom: 5, textAlign: 'center', borderBottomWidth: 2, borderBottomColor: '#ddd' }

});

export default ListItem