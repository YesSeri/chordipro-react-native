import React, { useState, useEffect } from 'react'
import { StyleSheet, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from '../components/Files/BottomBar';
import FileList from '../components/Files/FileList';
import { importAllKeys, saveData, debugging, getData } from '../storage';

const Files = ({ ...restProps }) => {
	const [files, setFiles] = useState([]);
	async function getFiles() {
		const keys = await importAllKeys();
		setFiles(keys);
	}
	useEffect(() => {
		getFiles();
	}, []);

	async function createFile(name) {
		await saveData("", name);
		getFiles();
	}

	return (
		<SafeAreaView style={styles.container}>
			{/* <Button title="CLEAR" onPress={() => debugging.clearAsyncStorage()} /> */}
			<ScrollView style={{ alignSelf: 'center', }}>
				<FileList files={files} {...restProps} />
			</ScrollView>
			<BottomBar createFile={createFile} />
		</SafeAreaView >
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'space-between'
	},
});

export default Files