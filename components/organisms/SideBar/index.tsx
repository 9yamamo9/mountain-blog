import { Box, Drawer, List, ListItem, Toolbar } from '@mui/material'
import Profile from '../../molecules/Profile'

const SideBar = () => {
	return (
		<Drawer
			variant='permanent'
			sx={{
				width: 240,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
			}}>
			<Box sx={{ overflow: 'auto' }}>
				<List>
					<ListItem>
						<Profile />
					</ListItem>
				</List>
			</Box>
		</Drawer>
	)
}

export default SideBar
