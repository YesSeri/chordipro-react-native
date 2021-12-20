import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Declaration from './Declaration'
import Music from './Music'
import parseSong from '../../helper/parser'
import { MonoText } from '../../typography';

const Song = ({ content }) => {
	const [parsed, setParsed] = useState([])
	useEffect(() => {
		const parsedContent = parseSong(content)
		console.log(parsedContent)
		setParsed(parsedContent)
	}, [content])

	return (
		<View style={styles.outer}>
			{parsed.map((el, i) => {
				return (
					<View key={i} style={styles.container}>
						<SongElement el={el} />
					</View>
				)
			})}
		</View>
	)
}
const SongElement = ({ el }) => {
	switch (el.type) {
		case 'declaration':
			return <Declaration command={el.subtype.command} arg={el.subtype.argument} />
		case 'empty':
			return <Empty />
		case 'music':
			return <Music info={el}></Music>
		case 'acapella':
			return <Acapella>{el.content.lyrics}</Acapella>
		default:
			return null

	}
}

const Acapella = ({ children }) => <MonoText>{children}</MonoText>


const Empty = () => <Text>{'\n'}</Text>

const styles = StyleSheet.create({
	container: {
		paddingTop: 8,
	},
	outer: {
		flex: 1,
	}
});

export default Song