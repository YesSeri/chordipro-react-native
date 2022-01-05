// An arr with all the names of the directive. [0] is how to use [1] is the primary name [2] and more are alt names.
// const directiveList = [
// 	['{start_of_chorus}', 'start_of_chorus', 'soc'],
// 	['{end_of_chorus}', 'end_of_chorus', 'eoc'],
// 	['{title: title of song}', 'title', 't'],
// 	['{subtitle: subtitle e.g. artist name}', 'subtitle', 'st'],
// 	['{comment: this is a comment}', 'comment', 'c'],
// 	[`{transpose: 2} {transpose: -3} 
// Transposes a song x semitones up or down
// E.g G to A, or Cm to Am.`, 'transpose'],
// 	[`{year: 1984}`, 'year']
// ];
// 0 pretty name. 1 command. 2 explanation. 4 alt command.
const directiveList = [
	['Start of Chorus', '{start_of_chorus}', 'Indicates the start of chorus, will be displayed visually.', 'soc'],
	['End of Chorus', '{end_of_chorus}', 'Ends the chorus.', 'eoc'],
	['Title', '{title: title of song}', 'The title of the song', 't'],
	['Subtitle', '{subtitle: subtitle content}', 'A subtitle. E.g. the artist name, or some other information.', 'st'],
	['Comment', '{comment: this is a comment}', 'A comment in the song. E.g. dynamics, tempo or repeats. ', 'c'],
	['Transpose', `{transpose: 2} {transpose: -3}`, `Transposes a song x semitones up or down E.g G to A, or Cm to Am.`],
	['Year', `{year: 1984}`, 'The year the song was composed.']
];
export default directiveList;