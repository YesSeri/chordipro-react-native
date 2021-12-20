import React from 'react'
import { Heading, SubHeading } from '../typography';
import List from '../components/Finder/FinderList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';


const Finder = ({ navigation }) => {

	// This handles clicking to download song. Downloads it to device and then goes into view, or editor. 

	return (
		<SafeAreaView style={styles.container}>
			<Heading>FINDER</Heading>
			<SubHeading>Click a song to save it to your files.</SubHeading>

			<List navigation={navigation}></List>

		</SafeAreaView >
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	innerContainer: {
		alignSelf: 'center',
	},
	// 	innerContainer: {
	// 		flex: 1,
	// 		flexDirection: 'row',
	// 		justifyContent: 'space-between'
	// 	},
	// 	item: { textAlign: 'center', paddingBottom: 10 },
	// 	container: { paddingTop: 10 },
	// 	ionicon: { padding: 10 }
});

export default Finder