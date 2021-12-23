import React, { useContext, useEffect, useState } from 'react'
const titleUrl = 'https://chordipro-backend.uc.r.appspot.com/'
import SongContext from '../../helper/state';
import { importAllKeys, saveData } from '../../storage';
import List from '../reuseable/List';
import ListItem from '../reuseable/ListItem';

function getSongUrl(id) {
	return titleUrl + 'song/' + id;
}

const FinderList = ({ navigation }) => {
	const [songs, setSongs] = useState([])
	const { dispatch } = useContext(SongContext)

	useEffect(() => {
		// Get all possible songs to download at the start.
		fetch(titleUrl)
			.then(response => response.json())
			.then(data => setSongs(data));
	}, []);

	async function handlePress(id, artist) {
		navigation.navigate('Files')
		const songUrl = getSongUrl(id)
		const response = await fetch(songUrl)
		const data = await response.json()
		await saveData(data.content, `${artist} - ${data.title}`)
		const keys = await importAllKeys();
		dispatch({ type: 'setFiles', payload: { files: keys } })
	}
	return (
		<List>
			{
				songs.map((song, i) => {
					const value = `${song.artist} - ${song.title}`
					return <ListItem key={i} icon='download-outline' onPress={() => handlePress(song._id, song.artist)} value={value} />
				})
			}
		</List>
	)
}

export default FinderList