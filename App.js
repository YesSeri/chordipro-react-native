import React, { useReducer } from 'react';
import SongContext, { initialState, reducer } from './helper/state';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Nav from './components/Nav';
import { importAllKeys, saveData } from './storage'
import { titleData, contentData } from './helper/data'

// Sets default data if there is no data in asyncstorage
(async function () {
	const keys = await importAllKeys()
	if (keys.length === 0) {
		saveData(contentData, titleData)
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
