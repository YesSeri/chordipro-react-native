import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native';
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
	// Fix the lines and then return the lines seperated with a new line.
	return lines.map(line => fixLine(line)).reduce((acc, curr) => acc + '\n' + curr)
}

// The regex is to make sure when there is only chords then no dashes should be added.
function fixLine(line) {
	// This regex extracts all text outside brackets. Found here: https://stackoverflow.com/questions/64040421/js-extract-all-text-outside-the-brackets
	const test = line.replace(/\s*(?:\[[^\]]*\]|\([^)]*\))\s*/g, "")
	// Without this test a row with two chords or more e.g. [Gm][Am] will get a dash that I use to extend text under it. 
	// I also have a special case in the Music component to handle when there is only chords, without lyrics. It should not be positioned absolutely.
	// Instead it gets shown normally
	if (test === "") {
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
		if (startCounter) {
			len++;
		}
		if (arr[i] === ']') {
			let numDashes;
			// We check as many steps forward in the array as there are chars in the chord. 
			for (let j = 0; j < len; j++) {
				if (arr[i + j] === '[') {
					numDashes = len - j
				}
			}
			// If we find a new square bracket, we add as many dashes we need to make the chords not intersect, plus one extra to add some space.
			fixedContent += "-".repeat(numDashes)
			// This resets the counter.
			startCounter = false;
			len = 0;
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
			return <Music content={el.content}></Music>
		case 'acapella':
			return <Acapella>{el.content.lyrics}</Acapella>
		// This case gets triggered on a dev comment, that starts with an X. They should never be shown.
		default:
			return null
	}
}

const Acapella = ({ children }) => <MonoText>{children}</MonoText>


const Empty = () => <View style={{ height: 20 }}></View>

const styles = StyleSheet.create({
	container: {
	},
	outer: {
		flex: 1,
	}
});

export default Song