import AsyncStorage from '@react-native-async-storage/async-storage';

// Key is song name, value is chordpro format song.
export const saveData = async (value, key) => {
	try {
		const jsonValue = JSON.stringify(value)
		await AsyncStorage.setItem(key, jsonValue)
	} catch (e) {
		console.error(e)
	}
}

export const getData = async (key) => {
	try {
		const jsonValue = await AsyncStorage.getItem(key)
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		console.error(e)
	}
}
export const deleteData = async (key) => {
	try {
		return await AsyncStorage.removeItem(key)
	} catch (e) {
		console.error(e)
	}
}

// Use this to list all songs. Needs to be tweaked.
export const importAllKeys = async () => {
	try {
		const keys = await AsyncStorage.getAllKeys()
		return keys.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
	} catch (error) {
		console.error(error)
	}
}

const clearAsyncStorage = async () => {
	AsyncStorage.clear();
};
export const debugging = { clearAsyncStorage }