import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import { HeaderProps } from '../../organisms/Header'

const HeaderTitle: NextPage<HeaderProps> = (props) => {
	const { title } = props

	return (
		<Box flex={1}>
			<Typography variant='h4'>{title}</Typography>
		</Box>
	)
}

export default HeaderTitle
