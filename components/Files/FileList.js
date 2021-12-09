import React, { useContext } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Heading } from '../../typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getData } from '../../storage';
import SongContext from '../../helper/reducer';


const FileList = ({ files = [], navigation }) => {
	const { setTitle, setContent } = useContext(SongContext)
	const handleClick = async (key) => {
		// Should open the clicked element
		const content = await getData(key)
		setContent(content)
		setTitle(key)
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