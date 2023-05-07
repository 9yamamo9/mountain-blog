import { Box, Link, Typography } from '@mui/material'
import { NextPage } from 'next'

type HeaderItem = {
	iconComponent: JSX.Element
	name: string
	url?: string
}

const FooterItem: NextPage<HeaderItem> = (props) => {
	const { iconComponent, name, url } = props

	return (
		<Link
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			sx={{ textDecoration: 'none' }}>
			<Box
				display='flex'
				flexDirection='row'
				justifyContent='center'
				alignItems='center'>
				{iconComponent}
				<Typography variant='body1'>{name}</Typography>
			</Box>
		</Link>
	)
}

export default FooterItem
