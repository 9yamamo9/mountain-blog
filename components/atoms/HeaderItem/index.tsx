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
			flexDirection='row'
			justifyContent='center'
			alignItems='center'>
			{iconComponent}
			<Typography variant='h6' pl={1}>
				{name}
			</Typography>
		</Box>
	)
}

export default HeaderItem
