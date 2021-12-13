import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Heading } from '../typography';
const titleUrl = 'https://chordipro-backend.herokuapp.com/'

const Finder = ({ navigation }) => {
	const [songs, setSongs] = useState([])
	React.useEffect(() => {
		// const unsubscribe = navigation.addListener('focus', async () => {
		fetch(titleUrl)
			.then(response => response.json())
			.then(data => setSongs(data));
		// });
		// Return the function to unsubscribe from the event so it gets removed on unmount
		// return unsubscribe;
		// }, [navigation]);
	}, []);
	// This handles clicking song. Downloads it to device and then goes into view, or editor. 
	function handlePress(evt, id) {
		console.log('handle pressing song.')
	}
	return (
		<View>
			<Heading>FINDER</Heading>
			<View>
				{songs.map(song => <Text onPress={evt => handlePress(evt, song._id)} style={styles.item} key={song._id}>{song.title}</Text>)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	item: { textAlign: 'center', paddingBottom: 10 }
});

export default Finder