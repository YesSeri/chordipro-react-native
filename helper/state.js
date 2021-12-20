import { createContext } from "react";

const SongContext = createContext()

export const initialState = { title: "hallelujah", content: "{title: Hallelujah}\n{subtitle: Cohen}\n\nNow I've h[G]eard there was a sec[Em]ret chord that D[G]avid played, and it ple[Em]ased the Lord\nBut y[C]ou dont really c[D]are for music, do y[G]ou?  [D]\nIt g[G]oes like this, the f[C]ourth, the f[D]ifth, the m[Em]inor falls, the m[C]ajor lift\nThe b[D]affled king comp[B7]osing Hallel[Em]ujah\n\n{c:Chorus}\n{soc}\nHallel[C]ujah, Hallel[Em]ujah\nHallel[C]ujah, Hallel[G]u-[D]uj-[G]ah[D]\n{eoc}\n\nYour faith was strong but you needed proof. You saw her bathing on the roof\nHer beauty and the moonlight overthrew her\nShe tied you to a kitchen chair, she broke your throne, and she cut your hair\nAnd from your lips she drew the Hallelujah\n\nHallelujah, Hallelujah\nHallelujah, Hallelujah\n\nWell, maybe there's a God above\nAs for me all I've ever learned from love\nIs how to shoot somebody who outdrew you\nBut it's not a crime that you're hear tonight\nIt's not some pilgrim who claims to have seen the Light\nNo, it's a cold and it's a very broken Hallelujah\n\nHallelujah, Hallelujah\nHallelujah, Hallelujah\n\nInstrumental\n\nHallelujah, Hallelujah\nHallelujah, Hallelujah\n\nWell people I've been here before\nI know this room and I've walked this floor\nYou see I used to live alone before I knew ya\nAnd I've seen your flag on the marble arch\nBut listen love, love is not some kind of victory march, no\nIt's a cold and it's a broken Hallelujah\n\nHallelujah, Hallelujah\nHallelujah, Hallelujah\n\nThere was a time you let me know\nWhat's really going on below\nBut now you never show it to me, do you?\nAnd I remember when I moved in you\nAnd the holy dove she was moving too\nAnd every single breath we drew was Hallelujah\n\nHallelujah, Hallelujah\nHallelujah, Hallelujah\n\nNow I've done my best, I know it wasn't much\nI couldn't feel, so I tried to touch\nI've told the truth, I didnt come here to London just to fool you\nAnd even though it all went wrong\nI'll stand right here before the Lord of song\nWith nothing, nothing on my tongue but Hallelujah\n\nHallelujah, Hallelujah\nHallelujah, Hallelujah\nHallelujah, Hallelujah\nHallelujah, Hallelujah\nHallelujah", files: [] };


export function reducer(state, action) {
	switch (action.type) {
		case 'openFile':
			return { ...state, title: action.payload.title, content: action.payload.content };
		case 'setContent':
			return { ...state, content: action.payload.content }
		case 'setFiles':
			return { ...state, files: [...action.payload.files] }
		case 'noFile':
			return { ...state, title: "", content: "" };
		default:
			throw new Error("Invalid action type in reducer function. Please use an action that exists.");
	}
}

export default SongContext