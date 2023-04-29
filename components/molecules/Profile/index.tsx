import { Box } from '@mui/material'
import ProfileAvatar from '../../atoms/ProfileAvatar'
import ProfileDescribe from '../../atoms/ProfileDescribe'
import { NextPage } from 'next'

type ProfileProps = {
	src: string
	alt: string
	name: string
	message: string
}

const Profile: NextPage<ProfileProps> = (props) => {
	const { src, alt, name, message } = props

	return (
		<Box display='flex' flexDirection='column'>
			<Box display='flex' flexDirection='column' alignItems='center'>
				<ProfileAvatar src={src} alt={alt} />
			</Box>
			<ProfileDescribe name={name} message={message} />
		</Box>
	)
}

export default Profile
