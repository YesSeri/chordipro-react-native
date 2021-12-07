import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from '../components/Files/BottomBar';
import FileList from '../components/Files/FileList';
import { importAllKeys, saveData } from '../storage';

const Files = () => {
	const [files, setFiles] = useState([]);

	useEffect(() => {
		async function getFiles() {
			const keys = await importAllKeys();
			setFiles(keys);
		}
		getFiles();
	}, []);

	function createFile(name) {
		saveData("", name);
		setFiles([...files, name]);
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<FileList files={files} />
			</ScrollView>
			<BottomBar createFile={createFile} />
		</SafeAreaView>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'space-between'
	},
});

export default Files