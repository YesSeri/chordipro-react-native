import { createContext, useReducer } from "react";

const initialState = { title: "", content: "" };

function reducer(state, action) {
	switch (action.type) {
		case 'newFile':
			return { title: action.payload.title, content: action.payload.content };
		default:
			throw new Error();
	}
}

const SongContext = createContext({ reducer, initialState })

export { initialState, reducer, SongContext }