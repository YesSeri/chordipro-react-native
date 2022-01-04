import React from 'react'
import { Text, StyleSheet, Platform, View } from 'react-native';
// import { createChordLine, hasLyrics } from '../../helper/music';
import { MonoText } from '../../typography';


const Music = ({ content, isChorus }) => {
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
					<Lyrics>{lyrics.slice(prev, chordObj.position)}</Lyrics>
					<Chord>{chordObj.chord}</Chord>
				</Container>
			)
			rest = lyrics.slice(chordObj.position)
			prev = chordObj.position
		})
		// This adds the last text that has no chord after it. If there is no more lyrics the rest variable is empty string
		result.push(
			<Container key={-1} >
				<Lyrics>
					{rest}
				</Lyrics>
			</Container>
		)
	}
	return isChorus ?
		<View style={[styles.chorus]}>
			<Text> {result}</Text>
		</View>
		:
		<View>
			<Text>{result}</Text>
		</View>
}
const Container = ({ children, ...restProps }) => (
	<Text style={[]} {...restProps}>{children}</Text>
)
const Chord = ({ children }) => (
	<View>
		<MonoText style={styles.chord}>{children}</MonoText>
	</View>
)
const Lyrics = ({ children }) => (
	<MonoText style={styles.lyric}>{children}</MonoText>
)

// Goes through music, and if there are two chords in same position, or overlapping, then insert dashes in lyrics until no longer overlaps.
// const size = 15;
// const bottom = size / 3
let chord = { fontSize: 15, color: 'black', position: 'absolute' };
let lyric = { fontSize: 15, position: 'relative', lineHeight: 35 };
switch (Platform.OS) {
	case 'web':
		{
			chord.bottom = 3;
			lyric.bottom = -8
			break;
		}
	case 'android':
		{
			chord.bottom = 10;
			lyric.bottom = -10
			break;
		}
	case 'ios':
		// The ios version has not been tested at all.
		{
			chord.bottom = 10;
			lyric.bottom = -10
			break;
		}
	default:
		throw new Error("Encountered unknown platform OS.")
}

const styles = StyleSheet.create({
	chord,
	lyric,
	chorus: {
		borderLeftColor: "black",
		borderLeftWidth: 3,
		marginLeft: 3
	}
})

export default Music