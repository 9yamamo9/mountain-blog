import { Card } from '@mui/material'
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
		<Card>
			<Profile src={src} alt={alt} name={name} message={message} />
		</Card>
	)
}

export default SideBar
