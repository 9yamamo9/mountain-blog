import { AppBar, Toolbar } from '@mui/material'
import { NextPage } from 'next'
import HeaderTitle from '../../molecules/HeaderTitle'
import HeaderItems from '../../molecules/HeaderItems'

export type HeaderProps = {
	title: string
}
const Header: NextPage<HeaderProps> = (props) => {
	const { title } = props

	return (
		<AppBar
			position='fixed'
			color={'primary'}
			sx={{
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}>
			<Toolbar>
				<HeaderTitle title={title} />
				<HeaderItems />
			</Toolbar>
		</AppBar>
	)
}

export default Header
