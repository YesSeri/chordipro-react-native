import AsyncStorage from '@react-native-async-storage/async-storage';

// Key is song name, value is chordpro format song.
export const setData = async (value, key) => {
	console.log({ value, key })
	try {
		await AsyncStorage.setItem(key, value)
	} catch (e) {
		console.error(e)
	}
}


export const getData = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key)
		if (value !== null) {
			return value
		} else {
			throw new Error("No such song stored")
		}
	} catch (e) {
		console.error(e)
	}
}

// Use this to list all songs. Needs to be tweaked.
export const importAllKeys = async () => {
	try {
		return await AsyncStorage.getAllKeys();
	} catch (error) {
		console.error(error)
	}
}