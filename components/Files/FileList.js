import React, { useContext } from 'react'
import { Platform, StyleSheet, Alert, Text, View, Pressable } from 'react-native';
import { Heading } from '../../typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { deleteData, getData, importAllKeys } from '../../storage';
import SongContext from '../../helper/context';

const FileList = ({ files = [], navigation, isDeleting, setFiles }) => {
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
		dispatch({ type: 'noFile' })
		const keys = await importAllKeys();
		setFiles(keys);
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
		<View>
			<Heading>FILES</Heading>
			{files.map((key, i) => (
				<Pressable key={i} onPress={() => handleClick(key)}>
					<View style={styles.container}>
						<Ionicons name={"document-outline"} />
						<Text style={styles.titleText}>
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
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
});

export default FileList