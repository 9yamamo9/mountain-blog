import { Avatar } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'

type ProfileAvatarProps = {
	alt: string
	src: string
}
const ProfileAvatar: NextPage<ProfileAvatarProps> = (props) => {
	const { alt, src } = props

	return (
		<Avatar sx={{ width: 80, height: 80 }}>
			<Image src={src} alt={alt} width={160} height={80} />
		</Avatar>
	)
}

export default ProfileAvatar
