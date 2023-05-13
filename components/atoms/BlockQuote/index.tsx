import { Box, Container, Typography } from '@mui/material'
import { TbQuote } from 'react-icons/all'
import { NextPage } from 'next'

type BlockQuoteProps = {
	message: string
}
const BlockQuote: NextPage<BlockQuoteProps> = ({ message }) => {
	return (
		<Container>
			<Box display='flex' flexDirection='row'>
				<TbQuote size={36} />
				<Typography variant='body1'>{message}</Typography>
			</Box>
		</Container>
	)
}

export default BlockQuote
