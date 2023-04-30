import { Avatar } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import { ProfileProps } from '../../molecules/Profile'

type ProfileAvatarProps = Pick<ProfileProps, 'alt' | 'src'>

const ProfileAvatar: NextPage<ProfileAvatarProps> = (props) => {
	const { alt, src } = props

	return (
		<Avatar sx={{ width: 120, height: 120 }}>
			<Image src={src} alt={alt} width={240} height={120} />
		</Avatar>
	)
}

export default ProfileAvatar
