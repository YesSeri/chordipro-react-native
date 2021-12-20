import { createContext } from "react";

const SongContext = createContext()

export const initialState = { title: "hallelujah", content: "[Gmaj7]I am h[Bm7][Dm7][Em7]ap[Cmaj]p[Gm]y", files: [] };


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