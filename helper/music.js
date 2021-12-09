export function createChordLine(acc) {
	let row = ""
	const pos = acc[0].position;
	row += ' '.repeat(pos);
	row += acc[0].chord;
	for (let i = 1; i < acc.length; i++) {
		// Number of spaces to repeat. Current position minus prev position and previous positions chord length;
		const x = acc[i].position - acc[i - 1].position - acc[i - 1].chord.length;
		if (x > 0) {
			row += ' '.repeat(x);
		}
		row += acc[i].chord;
	}
	return row
}
export function hasLyrics(lyrics) {
	return lyrics.trim() !== "";
}