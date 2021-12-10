import React, { useState, useEffect, useCallback, useContext } from 'react'
import { StyleSheet, ScrollView, Text, SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Song from '../components/Viewer/Song'
import SongContext from '../helper/context';
import Error from '../components/Error';
import { selectFileErrorMessage } from '../helper/ErrorMessages';

const Viewer = () => {
	const { state: { content, title } } = useContext(SongContext)
	// console.log({ content, title }, !!title && !!content)
	const hasFile = !!title && !!content;
	return (
		<SafeAreaView style={styles.container}>
			{hasFile ?
				<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
					<Song content={content} />
					<StatusBar style='auto' />
				</ScrollView >
				:
				// <Text>AAAAAAAAAAAb</Text>
				<Error>{selectFileErrorMessage}</Error>
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
