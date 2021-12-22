import React from 'react'
import { Heading, SubHeading } from '../typography';
import List from '../components/Finder/FinderList';
import { StyleSheet } from 'react-native';
import SafeAreaViewCustom from '../components/reuseable/SafeAreaViewCustom';


const Finder = ({ navigation }) => {

	// This handles clicking to download song. Downloads it to device and then goes into view, or editor. 

	return (
		<SafeAreaViewCustom style={styles.container}>
			<Heading>FINDER</Heading>
			<SubHeading>Click a song to save it to your files.</SubHeading>

			<List navigation={navigation}></List>

		</SafeAreaViewCustom >
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	innerContainer: {
		alignSelf: 'center',
	},
});

export default Finder