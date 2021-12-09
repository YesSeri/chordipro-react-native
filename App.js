import React, { useState, useMemo, useReducer } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Editor, Viewer, Files } from './pages'
import SongContext, { initialState, reducer } from './helper/context';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const tabs = [
	{ name: "Files", component: Files },
	{ name: "Viewer", component: Viewer },
	{ name: "Editor", component: Editor }
]

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
				<Nav tabs={tabs} />
			</SafeAreaProvider>
		</SongContext.Provider >
	);
}

const navOptions = (route) => {
	function getIcon(routeName, focused) {
		if (routeName === 'Viewer') {
			return focused ? 'eye-outline' : 'eye';
		}
		if (routeName === 'Files') {
			return focused ? 'file-tray-stacked-outline' : 'file-tray-stacked';
		}
		if (routeName === 'Editor') {
			return focused ? 'create-outline' : 'create';
		}
	}
	return {
		tabBarIcon: ({ focused, color, size }) => {
			const iconName = getIcon(route.name, focused)
			return <Ionicons name={iconName} size={size} color={color} />;
		},
		tabBarActiveTintColor: 'tomato',
		tabBarInactiveTintColor: 'gray',
		headerShown: false,
	}
}
const Nav = ({ tabs }) => {
	return (<NavigationContainer>
		<Tab.Navigator
			screenOptions={({ route }) => navOptions(route)}
		>
			{tabs.map((tab, i) => (
				<Tab.Screen key={i} name={tab.name} component={tab.component} />
			))}
		</Tab.Navigator>
	</NavigationContainer>
	)
}