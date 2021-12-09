import React, { useState, useEffect, useCallback, useContext } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Song from '../components/Viewer/Song'
import SongContext from '../helper/context';
import { SafeAreaView } from 'react-native-safe-area-context';
import Error from '../components/Error';
import { selectFileErrorMessage } from '../helper/ErrorMessages';

const Viewer = () => {
	const { state: { content, title } } = useContext(SongContext)
	return (
		<SafeAreaView>
			{title ?
				<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
					<Song content={content} />
					<StatusBar style='auto' />
				</ScrollView >
				:
				<CustomError title={title} content={content} />
			}
		</SafeAreaView>
	)
}

const CustomError = ({ title, content }) => {
	console.log(!!title, !!content)
	console.log(title, content)
	if (!title && !content) {
		return <Error>{selectFileErrorMessage}</Error>
	} else {
		return <Error>Enter some content in the Editor screen</Error>
	}

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
