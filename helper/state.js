import { createContext } from "react";

const SongContext = createContext()

export const initialState = { title: "Pogues", content: "{t:Fairytale Of New York}\n{st:The Pogues}\n [G/D]    [D]  [G/D]     [Asus4/E]        [D]  [G/D]     \nThey've got c[D]ars\nBig as b[A]ars", files: [] };


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