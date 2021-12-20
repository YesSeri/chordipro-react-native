import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomBar, FileList } from '../components/Files'
import { importAllKeys } from '../storage';
import SongContext from '../helper/state';
import { Heading } from '../typography';

const Files = ({ navigation }) => {
	const { state: { files }, dispatch } = useContext(SongContext)
	const [isDeleting, setIsDeleting] = useState(false);
	useEffect(() => {
		async function getFiles() {
			const keys = await importAllKeys();
			dispatch({ type: 'setFiles', payload: { files: keys } })
		}
		getFiles()
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Heading>FILES</Heading>
			<FileList files={files} navigation={navigation} isDeleting={isDeleting} />
			<BottomBar isDeleting={isDeleting} setIsDeleting={setIsDeleting} />
		</SafeAreaView >
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Files