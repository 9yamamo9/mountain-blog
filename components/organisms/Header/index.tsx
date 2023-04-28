import { Box, Toolbar } from '@mui/material'
import { NextPage } from 'next'
import HeaderTitle from '../../molecules/HeaderTitle'
import HeaderItems from '../../molecules/HeaderItems'

type HeaderProps = {
	title: string
}
const Header: NextPage<HeaderProps> = (props) => {
	const { title } = props

	return (
		<Box>
			<Toolbar>
				<HeaderTitle title={title} />
				<HeaderItems />
			</Toolbar>
		</Box>
	)
}

export default Header
