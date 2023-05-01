import { Box, Drawer, List, ListItem, Toolbar } from '@mui/material'
import Profile from '../../molecules/Profile'
import { NextPage } from 'next'

type SideBarProps = {
	src: string
	alt: string
	name: string
	message: string
}

const SideBar: NextPage<SideBarProps> = (props) => {
	const { src, alt, name, message } = props

	return (
		<Drawer
			variant='permanent'
			sx={{
				width: 240,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
			}}>
			<Toolbar />
			<Box sx={{ overflow: 'auto' }}>
				<Profile src={src} alt={alt} name={name} message={message} />
			</Box>
		</Drawer>
	)
}

export default SideBar
