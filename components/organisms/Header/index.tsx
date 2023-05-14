import { AppBar, Toolbar } from '@mui/material'
import { NextPage } from 'next'
import HeaderTitle from '../../molecules/HeaderTitle'

export type HeaderProps = {
	title: string
}
const Header: NextPage<HeaderProps> = (props) => {
	const { title } = props

	return (
		<AppBar
			position='absolute'
			color={'primary'}
			sx={{
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}>
			<Toolbar>
				<HeaderTitle title={title} />
			</Toolbar>
		</AppBar>
	)
}

export default Header
