import React, { useState, useEffect, useCallback, useContext } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Song from '../components/Viewer/Song'

import SongContext from '../helper/context';

const Viewer = () => {
	const { song, title } = useContext(SongContext)
	return (
		<ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
			<Song song={song} />
			{/* <StatusBar style='auto' /> */}
		</ScrollView >
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
