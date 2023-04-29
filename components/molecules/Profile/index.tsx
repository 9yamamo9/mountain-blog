import { Box } from '@mui/material'
import ProfileAvatar from '../../atoms/ProfileAvatar'
import ProfileDescribe from '../../atoms/ProfileDescribe'

const Profile = () => {
	return (
		<Box display='flex' flexDirection='column'>
			<Box display='flex' flexDirection='column' alignItems='center'>
				<ProfileAvatar src='/Profile/yamamori-rice.jpg' alt='Mountain Forest' />
			</Box>
			<ProfileDescribe name='Mountain Forest' message='Welcome to my blogs.' />
		</Box>
	)
}

export default Profile
