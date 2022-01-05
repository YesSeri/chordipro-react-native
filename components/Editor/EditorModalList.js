import React from 'react'
import { View } from 'react-native';
import EditorListItem from './EditorListItem';
import directiveList from '../../helper/directiveList'

const List = () => {
	return (
		<View>
			{directiveList.map(item => {
				return <EditorListItem key={item[0]} item={item}></EditorListItem>
			})}
		</View>
	)
}

// const styles = StyleSheet.create({
// });

export default List