import { AppBar, Container, Toolbar, Typography } from '@mui/material'

export const Header = () => {
	return (
		<AppBar position='static' color={'transparent'}>
			<Container maxWidth='xl'>
				<Toolbar>
					<Typography variant='h4'>深夜の怠惰な技術ブログ</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Header
