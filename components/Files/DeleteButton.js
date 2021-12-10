import React from 'react'
import { StyleSheet, Button } from 'react-native';

const DeleteButton = ({ ...restProps }) => {
	console.log({ restProps })
	return (
		<Button title="delete" {...restProps} />
	)
}

const styles = StyleSheet.create({
});

export default DeleteButton