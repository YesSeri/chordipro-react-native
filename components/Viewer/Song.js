import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Declaration from './Declaration'
import Music from './Music'
import parseSong from '../../helper/parser'
import { MonoText } from '../../typography';

const Song = ({ content }) => {
	const [parsed, setParsed] = useState([])
	useEffect(() => {
		let fixedContent = fixContent(content);
		const parsedContent = parseSong(fixedContent)
		setParsed(parsedContent)
	}, [content])

	return (
		<View style={styles.outer}>
			{parsed.map((el, i) => {
				return (
					<View key={i} style={styles.container}>
						<SongElement el={el} />
					</View>
				)
			})}
		</View>
	)
}

// This is created to solve a problem that happens if two chords are next to each other like this:
// L[Em][G]et it be
// The absolute positioning of the chords will overlay the two chords. Not good!
// I use this to insert dashes in the places where the chords overlap.
function fixContent(content) {
	const lines = content.replace(/\r/g, "").split("\n");
	return lines.map(line => fixLine(line)).reduce((acc, curr) => acc + '\n' + curr)
}
// The regex is to make sure when there is only chords then no dashes should be added.
function fixLine(line) {
	const a = line.replace(/\s*(?:\[[^\]]*\]|\([^)]*\))\s*/g, "")
	if (a === "") {
		return line
	}

	const arr = line.split("");
	let fixedContent = "";
	let len = 0;
	let startCounter = false;
	for (let i = 0; i < arr.length; i++) {
		fixedContent += arr[i]
		if (arr[i] === '[') {
			startCounter = true;
		}
		// This means we reached end of chord. 
		if (arr[i] === ']') {
			let numDashes;
			// We check as many steps forward in the array as there are chars in the chord. 
			for (let j = 0; j < len; j++) {
				if (arr[i + j] === '[') {
					numDashes = len - j + 1
				}
			}

			// If we find a new square bracket, we add as many dashes we need to make the chords not intersect, plus one extra to add some space.
			fixedContent += "-".repeat(numDashes)
			// This resets the counter.
			startCounter = false;
			len = 0;
		}

		if (startCounter) {
			len++;
		}
	}
	return fixedContent
}
const SongElement = ({ el }) => {
	switch (el.type) {
		case 'declaration':
			return <Declaration command={el.subtype.command} arg={el.subtype.argument} />
		case 'empty':
			return <Empty />
		case 'music':
			return <Music info={el}></Music>
		case 'acapella':
			return <Acapella>{el.content.lyrics}</Acapella>
		default:
			return null

	}
}

const Acapella = ({ children }) => <MonoText>{children}</MonoText>


const Empty = () => <Text>{'\n'}</Text>

const styles = StyleSheet.create({
	container: {
		paddingTop: 8,
	},
	outer: {
		flex: 1,
	}
});

export default Song