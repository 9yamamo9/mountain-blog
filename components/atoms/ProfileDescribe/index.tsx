import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import { ProfileProps } from '../../molecules/Profile'

type ProfileDescribeProps = Pick<ProfileProps, 'name' | 'message'>

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
