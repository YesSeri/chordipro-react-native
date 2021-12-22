import React, { useReducer } from 'react';
import SongContext, { initialState, reducer } from './helper/state';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Nav from './components/Nav';
import { importAllKeys, saveData } from './storage'
import { songArr } from './helper/data'

// Sets default data if there is no data in asyncstorage. A song by The Pogues.
(async function () {
	const keys = await importAllKeys()
	if (keys.length === 0) {
		songArr.forEach(([title, content]) => {
			saveData(content, title)
		});
	}
})()

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
