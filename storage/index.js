import AsyncStorage from '@react-native-async-storage/async-storage';

// Key is song name, value is chordpro format song.
export const saveData = async (value, key) => {
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
		const keys = await AsyncStorage.getAllKeys()
		return keys.sort();
	} catch (error) {
		console.error(error)
	}
}