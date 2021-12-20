import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Editor, Viewer, Files, Finder } from '../../pages'

const Tab = createBottomTabNavigator();

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
	if (routeName === 'Finder') {
		return focused ? 'search-circle-outline' : 'search-circle';
	}
}

const navOptions = (route) => ({
	tabBarIcon: ({ focused, color, size }) => {
		const iconName = getIcon(route.name, focused)
		return <Ionicons name={iconName} size={size} color={color} />;
	},
	tabBarActiveTintColor: 'tomato',
	tabBarInactiveTintColor: 'gray',
	headerShown: false,
})
const Nav = () => (
	<NavigationContainer>
		<Tab.Navigator
			screenOptions={({ route }) => navOptions(route)}
		>
			{tabs.map((tab, i) => (
				<Tab.Screen key={i} name={tab.name} component={tab.component} />
			))}
		</Tab.Navigator>
	</NavigationContainer>
)

const tabs = [
	{ name: "Viewer", component: Viewer },
	{ name: "Files", component: Files },
	{ name: "Finder", component: Finder },
	{ name: "Editor", component: Editor },
]

export default Nav;