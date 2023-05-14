import { Box, Paper, Typography } from '@mui/material'
import FooterItems from '../../molecules/FooterItems'

const Footer = () => {
	return (
		<Box
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			p={2}
			sx={{ bottom: 0 }}>
			<FooterItems />
			<Typography variant='body2' mt={1}>
				{"© 2023 Mountain Forest's blog"}
			</Typography>
		</Box>
	)
}

export default Footer
