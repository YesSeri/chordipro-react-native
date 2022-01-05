import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Editor, Viewer, Files } from '../../pages'
// import { Editor, Viewer, Files } from '../../pages'
import { colors } from '../../helper/designContext';

const tabs = [
	{ name: "Editor", component: Editor },
	{ name: "Files", component: Files },
	{ name: "Viewer", component: Viewer },
	// { name: "Finder", component: Finder },
]

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
	tabBarActiveTintColor: colors.color3,
	tabBarInactiveTintColor: 'grey',
	headerShown: false,
	tabBarHideOnKeyboard: true,
	tabBarStyle: [{ display: "flex" }, null]
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



export default Nav;