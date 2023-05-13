import { Box, Paper, Typography } from '@mui/material'
import { TbQuote } from 'react-icons/all'
import { NextPage } from 'next'

type BlockQuoteProps = {
	message: string
}
const BlockQuote: NextPage<BlockQuoteProps> = ({ message }) => {
	return (
		<Box display='flex' flexDirection='row' justifyContent='center'>
			<Paper elevation={1} sx={{ my: 2 }}>
				<Box display='flex' flexDirection='row' justifyContent='center' p={2}>
					<TbQuote size={36} />
					<Typography variant='body1'>{message}</Typography>
				</Box>
			</Paper>
		</Box>
	)
}

export default BlockQuote
