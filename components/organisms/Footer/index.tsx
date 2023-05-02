import { Box, Typography } from '@mui/material'
import HeaderItems from '../../molecules/HeaderItems'

const Footer = () => {
	return (
		<Box
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			bgcolor='lightgrey'
			p={1}>
			<HeaderItems />
			<Typography variant='body2' mt={1}>
				{"© 2023 Mountain Forest's blog"}
			</Typography>
		</Box>
	)
}

export default Footer
