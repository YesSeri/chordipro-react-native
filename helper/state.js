import { createContext } from "react";

const SongContext = createContext()

export const initialState = {
	title: "The Pogues - Fairytale of New York", content: `{t:Fairytale Of New York}
{st:The Pogues}

It was Christmas [D]Eve babe In the [G]drunk tank
An old man [D]said to me, won't see an[G/A]other one [A] And then he [D]sang a song
`, files: []
};


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
			throw new Error("Invalid action type in reducer function. Please use an action type that exists.");
	}
}

export default SongContext