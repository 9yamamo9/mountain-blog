import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { NextPage } from 'next'

type HeaderProps = {
	title: string
}
export const Header: NextPage<HeaderProps> = (props) => {
	const { title } = props

	return (
		<Box>
			<Toolbar>
				<Typography variant='h4'>{title}</Typography>
			</Toolbar>
		</Box>
	)
}

export default Header
