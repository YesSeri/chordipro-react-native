import React, { useContext } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Heading } from '../../typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getData } from '../../storage';
import SongContext from '../../helper/context';


const FileList = ({ files = [], navigation }) => {
	const { dispatch } = useContext(SongContext)
	const handleClick = async (key) => {
		// Should open the clicked element
		const content = await getData(key)
		dispatch({ type: 'newFile', payload: { title: key, content } })
		if (content) {
			navigation.navigate('Viewer')
		} else {
			navigation.navigate('Editor')
		}

	}
	return (
		<View>
			<Heading>FILES</Heading>
			{files.map((key, i) => (
				<Pressable key={i} onPress={() => handleClick(key)}>
					<View style={styles.container}>
						<Ionicons name={"document-outline"} />
						<Text>
							{key}
						</Text>
					</View>
				</Pressable>
			))}
		</View >
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row'
	}
});

export default FileList