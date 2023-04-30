import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'

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
