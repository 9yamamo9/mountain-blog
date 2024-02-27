import { Box, Paper, Typography } from '@mui/material'
import { NextPage } from 'next'
import { FaQuoteLeft } from 'react-icons/fa'

type BlockQuoteProps = {
	message: string
}
const BlockQuote: NextPage<BlockQuoteProps> = ({ message }) => {
	return (
		<Box display='flex' flexDirection='row' justifyContent='center'>
			<Paper elevation={1} sx={{ my: 2 }}>
				<Box display='flex' flexDirection='row' justifyContent='center' p={2}>
					<FaQuoteLeft size={36} />
					<Typography variant='body1'>{message}</Typography>
				</Box>
			</Paper>
		</Box>
	)
}

export default BlockQuote
