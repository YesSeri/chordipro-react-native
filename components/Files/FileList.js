import React, { useContext } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Heading } from '../../typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getData } from '../../storage';
import SongContext from '../../helper/context';


const FileList = ({ files = [] }) => {
	const { setTitle, setContent } = useContext(SongContext)
	const handleClick = async (el) => {
		// Should open the clicked element
		const song = await getData(el)
		console.log({ song, el })

	}
	return (
		<View>
			<Heading>FILES</Heading>
			{files.map((el, i) => (
				<Pressable key={i} onPress={() => handleClick(el)}>
					<View style={styles.container}>
						<Ionicons name={"document-outline"} />
						<Text>
							{el}
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