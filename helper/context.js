import { createContext } from "react";

const SongContext = createContext({ title: "", content: "" })

export const initialState = { title: "", content: "" };


export function reducer(state, action) {
	switch (action.type) {
		case 'openFile':
			return { title: action.payload.title, content: action.payload.content };
		case 'setContent':
			return { ...state, content: action.payload.content }
		case 'noFile':
			return { title: "", content: "" };
		default:
			throw new Error();
	}
}

export default SongContext