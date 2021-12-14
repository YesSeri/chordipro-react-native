import React, { useState, useMemo, useReducer } from 'react';

import SongContext, { initialState, reducer } from './helper/context';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Nav from './components/Nav';

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<SongContext.Provider value={{ state, dispatch }}>
			<SafeAreaProvider>
				<Nav />
			</SafeAreaProvider>
		</SongContext.Provider >
	);
}
