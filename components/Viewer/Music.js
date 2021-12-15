import React from 'react'
import { StyleSheet, View } from 'react-native';
import { createChordLine, hasLyrics } from '../../helper/music';
import { MonoText } from '../../typography';

const Music = ({ info }) => {
	const lineHasLyrics = hasLyrics(info.content.lyrics)
	return (
		<View style={styles.container}>
			<Chords hasLyrics={lineHasLyrics} acc={info.content.acc} />
			{lineHasLyrics && <Lyrics lyrics={info.content.lyrics} />}
		</View>
	)
}

const Chords = ({ acc, hasLyrics }) => {
	let line = "";
	if (hasLyrics) {
		line = createChordLine(acc)
	} else {
		acc.forEach(el => {
			const compare = 7 - el.chord.length
			line += el.chord + " " + " ".repeat(compare < 0 ? 0 : compare);
		});
	}
	return (
		<MonoText>
			{line}
		</MonoText>
	)
}


const Lyrics = ({ lyrics }) => {
	return (
		<MonoText>
			{lyrics}
		</MonoText>
	)
}
const styles = StyleSheet.create({
	container: {
	}
})

export default Music