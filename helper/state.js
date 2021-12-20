import { createContext } from "react";

const SongContext = createContext()

export const initialState = { title: "hallelujah", content: "{title: Hallelujah}\n{subtitle: Cohen}\n\nNow I've h[G]eard there was a s[Em]ecret chord that D[G]avid played, and it pl[Em]eased the Lord\nBut y[C]ou dont really c[D]are for music, do y[G]ou?  [D]\n", files: [] };


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