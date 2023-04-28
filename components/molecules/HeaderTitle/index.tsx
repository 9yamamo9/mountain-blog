import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'

type HeaderProps = {
	title: string
}
const HeaderTitle: NextPage<HeaderProps> = (props) => {
	const { title } = props

	return (
		<Box flex={1}>
			<Typography variant='h4'>{title}</Typography>
		</Box>
	)
}

export default HeaderTitle
