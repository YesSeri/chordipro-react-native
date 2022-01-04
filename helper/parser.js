import { transpose, parse, prettyPrint } from 'chord-magic';
const squareBracketsRe = /\[.*?]/;

function replaceFirstOccurence(text, searchPhrase) {
	return text.replace(searchPhrase, "")
}
function removeChordNTimes(text, times) {
	for (let i = 0; i < times; i++) {
		text = replaceFirstOccurence(text, squareBracketsRe);
	}
	return text;
}
// First chord is 1. Returns null if match not found.
function getNthChordAndSpaces(text, n) {
	if (n < 1) {
		throw new Error("To low value. No chord can be found before position 1.")
	}
	text = removeChordNTimes(text, n - 1)
	const matches = text.match(squareBracketsRe);
	if (matches === null) {
		return null
	}
	// The match value looks like this [G]. We remove the square brackets with the slice. 
	const chord = matches[0].slice(1, -1)
	const position = matches.index
	return { chord, position }
}
function getChordAndSpaces(text) {
	let i = 1;
	let chordSpaceArr = [];
	for (; ;) {
		const chordInfo = getNthChordAndSpaces(text, i);
		i++;
		if (!chordInfo) {
			break;
		}
		chordSpaceArr.push(chordInfo);
	}
	return chordSpaceArr
}
function getLyrics(text) {
	// Removes all chords from lyrics
	return text.replace(/\[.*?]/g, '');
}
function getMusicLine(line, transposeSemiTones) {
	let acc = getChordAndSpaces(line)
	if (transposeSemiTones != 0) {
		acc = acc.map(chordObj => {
			const transposedChord = transposeChord(chordObj.chord, transposeSemiTones)
			return { ...chordObj, chord: transposedChord }
		})
	}
	return {
		acc, lyrics: getLyrics(line)
	}
}

// Recieves "G" and 2 => "A"
// Recieves "Gm" and -1 => "F#m"
function transposeChord(chord, transposeSemitones) {
	if (!transposeSemitones) {
		transposeSemitones = 0;
	}
	return prettyPrint(transpose(parse(chord), transposeSemitones))
}


function splitByNewline(text) {
	return text.replace(/\r/g, "").split(/\n/);
}

// Found here https://stackoverflow.com/questions/50318277/how-to-validate-brackets
function validateBrackets(input) {
	let tmp = 0;
	for (const c of input) {
		if (c === '[') tmp++;
		else if (c === ']' && --tmp < 0) return false; // Unexpected  ')' 
	}
	return tmp === 0; // False if unbalanced
}

// Looks at line and figures out if it is 
// - directive {} 
// - comment #
// - song text and chords | let it b[D]e
// - song text no chords, a capella for example | let it be
function analyzeLine(line) {
	if (line.trim().charAt(0) === '#') {
		return "devComment"
	}
	if (line.trim() === '') {
		return "empty"
	}
	if (line.trim().charAt(0) === '{') {
		return "directive"
	}
	if (line.includes('[') && validateBrackets(line)) {
		return "music"
	}
	// If nothing matches it must be some sort of line where we just want to print text. Lets call it acapella.
	return 'acapella'
}

// https://www.chordpro.org/chordpro/chordpro-directives/
// Meta-data directives 
// title (short: t) X
// sorttitle
// subtitle (short: st) X
// artist
// composer
// lyricist
// copyright
// album
// year
// key
// time
// tempo
// duration
// capo
// meta

//Formatting directives
//comment (short: c) X
//highlight
//comment_italic (short: ci)
//comment_box (short: cb)
//image


// Introduction to environments
// start_of_chorus (short: soc) X
// end_of_chorus (short: eoc) X
// chorus
// start_of_verse (short: sov)
// end_of_verse (short: eov)
// start_of_bridge (short: sob)
// end_of_bridge (short: eob)
// start_of_tab (short: sot)
// end_of_tab (short: eot)
// start_of_grid (short: sog)
// end_of_grid (short: eog)


// Delegate environment directives 
// start_of_abc / end_of_abc
// start_of_ly / end_of_ly

// Chord diagrams
// define
// chord

// Transposition
// transpose CURRENTLY DOING


function getDirectiveCommand(line) {
	const [command] = line.slice(1, -1).split(':');
	if (command === 'soc' || command === 'start_of_chorus') {
		return 'start_of_chorus';
	}
	if (command === 'eoc' || command === 'end_of_chorus') {
		return 'end_of_chorus';
	}
	if (command === 'title' || command === 't') {
		return 'title'
	}
	if (command === 'subtitle' || command === 'st') {
		return 'subtitle'
	}
	if (command === 'comment' || command === 'c') {
		return 'comment'
	}
	if (command === 'transpose') {
		return 'transpose';
	}
}
function getDirectiveArguments(line) {
	// slice removes the square brackets.
	const [, argument] = line.slice(1, -1).split(':');
	if (!argument) {
		return null;
	}
	return argument.trim();
}
function parseDirectiveSubtype(line) {
	return {
		command: getDirectiveCommand(line),
		argument: getDirectiveArguments(line)
	}
}

function htmlInfo(line, modifiers) {

	const type = analyzeLine(line);
	if (type === 'music') {
		return {
			content: getMusicLine(line, modifiers.transpose),
			type,
			modifiers: { ...modifiers }
		}
	}
	if (type === 'directive') {
		const subtype = parseDirectiveSubtype(line)
		return {
			type, subtype
		}
	}
	if (type === "acapella") {
		return {
			content: {
				lyrics: line
			},
			type,
			modifiers: { ...modifiers }
		}
	}
	if (type === "devComment") {
		return {
			type,
			content: line.slice(1).trim()
		}
	}
	if (type === "empty") {
		return {
			type,
			modifiers: { ...modifiers }
		}
	}

}
// parseSong needs to contain modifiers for if it currently is a chorus and other things that will later affect how the text should be displayed. 
function parseSong(song) {
	let modifiers = { chorus: false, transpose: 0 }
	const arr = splitByNewline(song);
	const infoArr = arr.map(el => {
		const info = htmlInfo(el, modifiers);
		switch (info?.subtype?.command) {
			case "start_of_chorus": {
				modifiers.chorus = true;
				break;
			}
			case "end_of_chorus": {
				modifiers.chorus = false;
				break;
			}
			case "transpose": {
				modifiers.transpose = parseInt(info?.subtype?.argument);
				break;
			}
			default:
				break;
		}
		return info
	})
	return infoArr
}
// All info needed for electron to then turn this info into html. Each line will be a new el in array. So final product delievered from parseSong() will be an array of htmlInfo.
// Needs metaInfo and what to display. The metainfo will affect which class gets assigned. The displayText is the defactor innerText.

// Examples
// const music = {
// 	content: {
// 		acc: [
// 			{ chord: "Em", position: 3 },
// 			{ chord: "D", position: 19 },
// 		],
// 		lyrics: `Time to say goodbye`
// 	},
// 	type: 'music',
// 	modifiers: ['chorus']
// }
// const title = {
// 	type: 'directive', subtype: { command: 'title', argument: 'Bohemian Rhapsody' }
// }
// const chorusInit = {
// 	type: 'directive', subtype: { command: 'start_of_chorus', argument: "" },
// }
// const chorusInit = {
// 	type: 'directive', subtype: { command: 'start_of_chorus', argument: "" },
// }
//
const exportedForTesting = {
	validateBrackets,
	replaceFirstOccurence,
	removeChordNTimes,
	getNthChordAndSpaces,
	splitByNewline,
	analyzeLine,
	getLyrics,
	getChordAndSpaces,
	parseSong,
	getDirectiveCommand,
	getDirectiveArguments,
	parseDirectiveSubtype,
	getMusicLine,
	transposeChord,
}
export { parseSong, exportedForTesting }