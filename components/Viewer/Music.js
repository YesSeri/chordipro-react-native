import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
// import { createChordLine, hasLyrics } from '../../helper/music';
import { MonoText } from '../../typography';

const Music = ({ info }) => {
	const line = createLine(info.content);
	return (
		<Text>{line}</Text>
	)
}

const createLine = (content) => {
	let lyrics = content.lyrics
	let rLyrics = [];
	let rest = content.lyrics
	let prev = 0;
	content.acc.forEach(chordObj => {
		rLyrics.push(<>
			<MonoText style={styles.lyric}>{lyrics.slice(prev, chordObj.position)}
			</MonoText>
			<View style={styles.chordContainer}>
				<MonoText style={styles.chord}>{chordObj.chord}</MonoText>
			</View>
		</>)
		rest = lyrics.slice(chordObj.position)
		prev = chordObj.position
	})
	rLyrics.push(<MonoText style={styles.lyric}>
		{rest}
	</MonoText>)
	return rLyrics

}
const styles = StyleSheet.create({
	chord: { color: 'red', left: 0, top: -25, position: 'absolute' },
	lyric: { lineHeight: 30 },
	chordContainer: { position: 'relative', color: 'white' },
	container: {
	}
})
export default Music