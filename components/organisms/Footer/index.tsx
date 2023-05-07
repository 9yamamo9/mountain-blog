import { Box, Paper, Typography } from '@mui/material'
import FooterItems from '../../molecules/FooterItems'

const Footer = () => {
	return (
		<Paper
			sx={{
				position: 'fixed',
				bottom: 0,
				left: 0,
				right: 0,
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}>
			<Box
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				bgcolor='lightgrey'
				p={1}>
				<FooterItems />
				<Typography variant='body2' mt={1}>
					{"© 2023 Mountain Forest's blog"}
				</Typography>
			</Box>
		</Paper>
	)
}

export default Footer
