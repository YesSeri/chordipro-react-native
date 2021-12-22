import React, { useContext } from 'react'
import { Platform, Alert } from 'react-native';
import { deleteData, getData, importAllKeys } from '../../storage';
import SongContext from '../../helper/state';
import ListItem from '../reuseable/ListItem';
import List from '../reuseable/List';

const FileList = ({ files = [], navigation, isDeleting }) => {
	const { dispatch } = useContext(SongContext)
	const handleClick = async (key) => {
		if (isDeleting) {
			await promptDelete(key);
		} else {
			await openFile(key);
		}
	}
	async function promptDelete(key) {
		const title = 'Delete File'
		const msg = `Are you sure you want to delete ${key}?`
		// The Alert package only exists on iOs and android. 
		if (Platform.OS === 'web') {
			const answer = confirm(title + '\n' + msg);
			if (answer) {
				deleteFile(key)
			}
		} else {
			Alert.alert(
				title,
				msg,
				[
					{
						text: "Cancel",
						onPress: () => console.log("Cancel Pressed"),
						style: "cancel"
					},
					{ text: "OK", onPress: () => deleteFile(key) }
				]
			);
		}
	}
	async function deleteFile(key) {
		await deleteData(key)
		const keys = await importAllKeys();
		dispatch({ type: 'setFiles', payload: { files: keys } })
	}
	async function openFile(key) {
		const content = await getData(key)
		dispatch({ type: 'openFile', payload: { title: key, content } })
		if (content) {
			navigation.navigate('Viewer')
		} else {
			navigation.navigate('Editor')
		}

	}
	return (
		<List>
			{files.map((el, i) => (
				<ListItem key={i} icon='document-outline' onPress={() => handleClick(el)} value={el} />
			))}
		</List>
	)
}

export default FileList