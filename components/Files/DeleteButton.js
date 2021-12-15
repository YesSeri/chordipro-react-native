import React from 'react'
import { Button } from 'react-native';

const DeleteButton = ({ ...restProps }) => {
	console.log({ restProps })
	return (
		<Button title="delete" {...restProps} />
	)
}

export default DeleteButton