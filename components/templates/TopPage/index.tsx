import { Box } from '@mui/material'
import Header, { HeaderProps } from '../../organisms/Header'
import { NextPage } from 'next'
import SideBar from '../../organisms/SideBar'
import { ProfileProps } from '../../molecules/Profile'

type TopPageProps = HeaderProps & ProfileProps

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
