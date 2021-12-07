import React, { useState, useEffect, useCallback, useContext } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Song from '../components/Viewer/Song'
import SongContext from '../helper/context';
import { SafeAreaView } from 'react-native-safe-area-context';

const Viewer = () => {
	const { song, title } = useContext(SongContext)
	return (
		<SafeAreaView>
			<ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
				<Song song={song} />
				{/* <StatusBar style='auto' /> */}
			</ScrollView >
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
