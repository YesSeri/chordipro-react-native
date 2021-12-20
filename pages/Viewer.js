import React, { useContext } from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Song from '../components/Viewer/Song'
import SongContext from '../helper/state';
import Error from '../components/Error';
import { noContentErrorMessage, noFileErrorMessage } from '../helper/ErrorMessages';

const Viewer = () => {
	const { state: { content, title } } = useContext(SongContext)
	console.log(content)
	const fileExists = !!title;
	const fileExistsButIsEmpty = fileExists && !content
	const errorMessage = fileExistsButIsEmpty ? noContentErrorMessage : noFileErrorMessage
	return (
		<SafeAreaView style={styles.container}>
			{fileExists ?
				<ScrollView contentContainerStyle={styles.innerContainer} >
					<Song content={content} />
				</ScrollView >
				:
				<Error>{errorMessage}</Error>
			}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	innerContainer: {
		flexGrow: 1,
		alignSelf: 'center',
	},
	title: {
		fontSize: 30,
	},
	container: {
		flex: 1,
	}
});

export default Viewer
