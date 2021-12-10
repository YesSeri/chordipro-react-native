<<<<<<< HEAD
import React, { useState, useMemo, useReducer } from 'react';

import SongContext, { initialState, reducer } from './helper/context';
=======
import React, { createContext, useState, useMemo } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Editor, Viewer, Files } from './pages'
import { dispatch, state } from './helper/reducer';
>>>>>>> master

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Nav from './components/Nav';


const SongContext = createContext()

export default function App() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
<<<<<<< HEAD
	const [state, dispatch] = useReducer(reducer, initialState)
	const value = useMemo(
		() => ({ title, setTitle, content, setContent }),
		[title, content]
	);
	return (
		<SongContext.Provider value={{ ...value, state, dispatch }}>
			<SafeAreaProvider>
				<Nav />
=======
	// const value = useMemo(
	// 	() => ({ title, setTitle, content, setContent }),
	// 	[title, content]
	// );

	return (
		<SongContext.Provider value={{ dispatch, state }}>
			<SafeAreaProvider>
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={({ route }) => ({
							tabBarIcon: ({ focused, color, size }) => {
								let iconName;

								if (route.name === 'Viewer') {
									iconName = focused ? 'eye-outline' : 'eye';
								}
								if (route.name === 'Files') {
									iconName = focused ? 'file-tray-stacked-outline' : 'file-tray-stacked';

								}
								if (route.name === 'Editor') {
									iconName = focused ? 'create-outline' : 'create';


								}

								// You can return any component that you like here!
								return <Ionicons name={iconName} size={size} color={color} />;
							},
							tabBarActiveTintColor: 'tomato',
							tabBarInactiveTintColor: 'gray',
							headerShown: false,
						})}
					>
						{/* <Tab.Screen name="Files" component={Files} />
						<Tab.Screen name="Viewer" component={Viewer} />
						<Tab.Screen name="Editor" component={Editor} /> */}
					</Tab.Navigator>
				</NavigationContainer>
>>>>>>> master
			</SafeAreaProvider>
		</SongContext.Provider >
	);
}
