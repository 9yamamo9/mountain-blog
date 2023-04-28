import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import { Component } from 'react'

type HeaderItem = {
	iconComponent: JSX.Element
	name: string
}

const HeaderItem: NextPage<HeaderItem> = (props) => {
	const { iconComponent, name } = props

	return (
		<Box
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'>
			{iconComponent}
			<Typography variant='caption'>{name}</Typography>
		</Box>
	)
}

export default HeaderItem
