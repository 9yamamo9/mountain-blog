import { Box } from '@mui/material'
import ProfileAvatar from '../../atoms/ProfileAvatar'
import ProfileDescribe from '../../atoms/ProfileDescribe'
import { NextPage } from 'next'

export type ProfileProps = {
	src: string
	alt: string
	name: string
	message: string
}

const Profile: NextPage<ProfileProps> = (props) => {
	const { src, alt, name, message } = props

	return (
		<Box mt={2}>
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'>
				<ProfileAvatar src={src} alt={alt} />
			</Box>
			<Box ml={2}>
				<ProfileDescribe name={name} message={message} />
			</Box>
		</Box>
	)
}

export default Profile
