import React, { useState, useMemo, useReducer } from 'react';

import SongContext, { initialState, reducer } from './helper/context';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Nav from './components/Nav';


export default function App() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [state, dispatch] = useReducer(reducer, initialState)
	const value = useMemo(
		() => ({ title, setTitle, content, setContent }),
		[title, content]
	);
	return (
		<SongContext.Provider value={{ ...value, state, dispatch }}>
			<SafeAreaProvider>
				<Nav />
			</SafeAreaProvider>
		</SongContext.Provider >
	);
}
