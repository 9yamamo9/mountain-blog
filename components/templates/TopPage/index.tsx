import { Box } from '@mui/material'
import Header from '../../organisms/Header'
import { NextPage } from 'next'
import SideBar from '../../organisms/SideBar'

type TopPageProps = {
	title: string
	src: string
	alt: string
	name: string
	message: string
}

const TopPage: NextPage<TopPageProps> = (props) => {
	const { title, src, alt, name, message } = props

	return (
		<Box display='flex'>
			<Header title={title} />
			<SideBar src={src} alt={alt} name={name} message={message} />
		</Box>
	)
}

export default TopPage
