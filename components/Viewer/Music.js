import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
// import { createChordLine, hasLyrics } from '../../helper/music';
import { MonoText } from '../../typography';


const Music = ({ content }) => {
	// If there is no lyrics, only chords, just print the line cleanly.
	let result = [];
	if (content.lyrics.trim() === "") {
		result.push(content.acc.map((chordObj, i) => <MonoText key={i}>{chordObj.chord} </MonoText>))
	} else {
		let lyrics = content.lyrics
		let rest = lyrics
		let prev = 0;
		content.acc.forEach((chordObj, i) => {
			result.push(
				<Container key={i}>
					<Lyrics style={styles.lyric}>{lyrics.slice(prev, chordObj.position)}
					</Lyrics>
					<Chord>{chordObj.chord}</Chord>
				</Container>)
			rest = lyrics.slice(chordObj.position)
			prev = chordObj.position
		})
		result.push(
			<Container key={-1} >
				<Lyrics>
					{rest}
				</Lyrics>
			</Container>
		)
	}
	return <Text>{result}</Text>
}
const Container = ({ children, ...restProps }) => (
	<Text style={styles.musicContainer} {...restProps}>{children}</Text>
)
const Chord = ({ children }) => (
	<View style={styles.chordContainer}>
		<MonoText style={styles.chord}>{children}</MonoText>
	</View>
)
const Lyrics = ({ children }) => (
	<MonoText style={styles.lyric}>{children}</MonoText>
)

// Goes through music, and if there are two chords in same position, or overlapping, then insert dashes in lyrics until no longer overlaps.
const distance = 14;
const styles = StyleSheet.create({
	chord: { color: 'black', left: 0, top: -distance - 7, position: 'absolute' },
	lyric: { position: 'relative', top: distance - 7, lineHeight: '250%' },
})
export default Music