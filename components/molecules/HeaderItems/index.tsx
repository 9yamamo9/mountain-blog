import HeaderItem from '../../atoms/HeaderItem'
import { FaLinkedin, FaTwitter } from 'react-icons/all'
import { Box } from '@mui/material'

const HeaderItems = () => {
	return (
		<Box display='flex' flex='row'>
			<HeaderItem iconComponent={<FaTwitter size={36} />} name='Twitter' />
			<HeaderItem iconComponent={<FaLinkedin size={36} />} name='LinkedIn' />
		</Box>
	)
}

export default HeaderItems
