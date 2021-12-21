import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
// import { createChordLine, hasLyrics } from '../../helper/music';
import { MonoText } from '../../typography';

const Music = ({ info }) => {
	return (
		<MusicLine content={info.content} />
	)
}

const MusicLine = ({ content }) => {
	// If there is no lyrics, only chords, just print the line cleanly.
	if (content.lyrics.trim() === "") {
		return <Text>{content.acc.map((chordObj, i) => <MonoText key={i}>{chordObj.chord} </MonoText>)}</Text>
	}
	let lyrics = content.lyrics
	let result = [];
	let rest = lyrics
	let prev = 0;
	content.acc.forEach((chordObj, i) => {
		result.push(
			<Text key={i} style={styles.musicContainer}>
				<MonoText style={styles.lyric}>{lyrics.slice(prev, chordObj.position)}
				</MonoText>
				<View style={styles.chordContainer}>
					<MonoText style={styles.chord}>{chordObj.chord}</MonoText>
				</View>
			</Text>)
		rest = lyrics.slice(chordObj.position)
		prev = chordObj.position
	})
	result.push(
		<Text key={-3} style={styles.musicContainer}>
			<MonoText style={styles.lyric}>
				{rest}
			</MonoText>
		</Text>
	)
	return <Text>{result}</Text>
}

// Goes through music, and if there are two chords in same position, or overlapping, then insert dashes in lyrics until no longer overlaps.
const styles = StyleSheet.create({
	chord: { color: 'black', left: 0, top: -30, position: 'absolute' },
	lyric: { lineHeight: 50 },
	chordContainer: { position: 'relative', color: 'white' },
})
export default Music