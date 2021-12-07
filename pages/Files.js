import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from '../components/Files/BottomBar';
import FileList from '../components/Files/FileList';
import { importAllKeys } from '../storage';

const Files = () => {
	const [files, setFiles] = useState([]);
	useEffect(() => {
		async function getFiles() {
			const keys = await importAllKeys();
			setFiles(keys);
		}

		getFiles();
	}, [files])

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<FileList files={files} />
				<BottomBar />
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'space-between'
	},
});

export default Files
