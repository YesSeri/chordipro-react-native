import React from 'react'
import { View } from 'react-native';
import ListItem from './ListItem';
import directiveList from '../../helper/directiveList'

const List = () => {
	return (
		<View>
			{directiveList.map(arr => {
				return <ListItem key={arr[0]} item={arr}></ListItem>
			})}
		</View>
	)
}

// const styles = StyleSheet.create({
// });

export default List