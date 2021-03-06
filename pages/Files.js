import React, { useState, useEffect } from 'react'
import { StyleSheet, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from '../components/Files/BottomBar';
import FileList from '../components/Files/FileList';
import { importAllKeys } from '../storage';

const Files = ({ navigation }) => {
	const [files, setFiles] = useState([]);
	const [isDeleting, setIsDeleting] = useState(false);
	useEffect(() => {
		async function getFiles() {
			const keys = await importAllKeys();
			setFiles(keys);
		}
		getFiles()
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			{/* <Button title="CLEAR" onPress={() => debugging.clearAsyncStorage()} /> */}
			<ScrollView style={{ alignSelf: 'center', }}>
				<FileList files={files} navigation={navigation} isDeleting={isDeleting} setFiles={setFiles} />
			</ScrollView>
			<BottomBar setFiles={setFiles} isDeleting={isDeleting} setIsDeleting={setIsDeleting} />
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