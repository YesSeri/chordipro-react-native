import React, { useContext } from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Song from '../components/Viewer/Song'
import SongContext from '../helper/context';
import Error from '../components/Error';
import { createContentErrorMessage, selectFileErrorMessage } from '../helper/ErrorMessages';

const Viewer = () => {
	const { state: { content, title } } = useContext(SongContext)
	const hasFile = !!title && !!content;
	const hasNoContent = !!title && !content
	const message = hasNoContent ? createContentErrorMessage : selectFileErrorMessage
	return (
		<SafeAreaView style={styles.container}>
			{hasFile ?
				<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
					<Song content={content} />
					<StatusBar style='auto' />
				</ScrollView >
				:
				<Error>{message}</Error>
			}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 30
	},
	container: {
		flex: 1,
	}
});

export default Viewer
