import { Card, Divider } from '@mui/material'
import Profile from '../../molecules/Profile'
import { NextPage } from 'next'
import TagList, { TagListProps } from '../../molecules/TagList'

type SideBarProps = {
	src: string
	alt: string
	name: string
	message: string
} & TagListProps

const SideBar: NextPage<SideBarProps> = (props) => {
	const { src, alt, name, message, tags } = props

	return (
		<Card>
			<Profile src={src} alt={alt} name={name} message={message} />
			<Divider sx={{ m: 1 }} />
			<TagList tags={tags} />
			<Divider sx={{ m: 1 }} />
		</Card>
	)
}

export default SideBar
