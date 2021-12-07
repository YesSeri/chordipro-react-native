import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Heading } from '../../typography';

const FileList = ({ files = [] }) => {
	if (!files) return
	return (
		<View>
			<Heading>FILES</Heading>
			{files.map((el, i) => {
				const [key] = Object.keys(el);
				return (
					<Text key={i}>
						{`${key}`}
					</Text>
				)
			})}
		</View >
	)
}

const styles = StyleSheet.create({
});

export default FileList