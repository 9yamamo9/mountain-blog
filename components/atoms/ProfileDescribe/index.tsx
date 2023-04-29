import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'

type ProfileDescribeProps = {
	name: string
	message?: string
}

const ProfileDescribe: NextPage<ProfileDescribeProps> = (props) => {
	const { name, message } = props

	return (
		<Box display='flex' flexDirection='column'>
			<Typography variant='h6'>{name}</Typography>
			<Typography variant='body1'>{message}</Typography>
		</Box>
	)
}

export default ProfileDescribe
