import React, { useState, useEffect, useContext } from 'react'
import { BottomBar, FileList } from '../components/Files'
import { importAllKeys } from '../storage';
import SongContext from '../helper/state';
import { Heading } from '../typography';
import SafeAreaViewCustom from '../components/reuseable/SafeAreaViewCustom';

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
		<SafeAreaViewCustom>
			<Heading>FILES</Heading>
			<FileList files={files} navigation={navigation} isDeleting={isDeleting} />
			<BottomBar isDeleting={isDeleting} setIsDeleting={setIsDeleting} navigation={navigation} />
		</SafeAreaViewCustom>
	);
}

export default Files