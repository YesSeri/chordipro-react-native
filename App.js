import React, { useState, useMemo } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Editor, Viewer, Files } from './pages'
import SongContext from './helper/context';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { titleData, songData } from './helper/data'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
	const [title, setTitle] = useState(titleData);
	const [song, setSong] = useState(songData);
	const value = useMemo(
		() => ({ title, setTitle, song, setSong }),
		[title, song]
	);
	return (
		<SongContext.Provider value={value}>
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
					})}
				>
					<Tab.Screen name="Viewer" component={Viewer} />
					<Tab.Screen name="Files" component={Files} />
					<Tab.Screen name="Editor" component={Editor} />
				</Tab.Navigator>
			</NavigationContainer>
		</SongContext.Provider>
	);
}