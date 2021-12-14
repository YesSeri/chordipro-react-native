import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Heading, SubHeading, subHeading } from '../typography';
import { importAllKeys, saveData } from '../storage'
import SongContext from '../helper/context';
const titleUrl = 'https://chordipro-backend.herokuapp.com/'
const getSongUrl = (id) => 'https://chordipro-backend.herokuapp.com/song/' + id

const Finder = ({ navigation }) => {
	const [songs, setSongs] = useState([])
	const { dispatch } = useContext(SongContext)

	React.useEffect(() => {
		// Get all possible songs to download at the start.
		fetch(titleUrl)
			.then(response => response.json())
			.then(data => setSongs(data));
	}, []);
	// This handles clicking to download song. Downloads it to device and then goes into view, or editor. 
	async function handlePress(id) {
		navigation.navigate('Files')
		const songUrl = getSongUrl(id)
		const response = await fetch(songUrl)
		const data = await response.json()
		await saveData(data.content, data.title)
		const keys = await importAllKeys();
		dispatch({ type: 'setFiles', payload: { files: keys } })
	}
	return (
		<View>
			<Heading>FINDER</Heading>
			<SubHeading>Click a song to save it to your files.</SubHeading>
			<View style={styles.innerContainer}>
				{songs.map(song => <Text onPress={() => handlePress(song._id)} style={styles.item} key={song._id}>{song.title}</Text>)}
			</View>
		</View >
	)
}

const styles = StyleSheet.create({
	item: { textAlign: 'center', paddingBottom: 10 },
	innerContainer: { paddingTop: 10 }
});

export default Finder