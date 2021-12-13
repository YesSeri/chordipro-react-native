import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from '../components/Files/BottomBar';
import FileList from '../components/Files/FileList';
import SongContext from '../helper/context';
import { importAllKeys } from '../storage';

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
			{/* <Button title="CLEAR" onPress={() => debugging.clearAsyncStorage()} /> */}
			<ScrollView style={{ alignSelf: 'center', }}>
				<FileList files={files} navigation={navigation} isDeleting={isDeleting} />
			</ScrollView>
			<BottomBar isDeleting={isDeleting} setIsDeleting={setIsDeleting} />
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