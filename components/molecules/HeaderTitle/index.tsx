import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import { HeaderProps } from '../../organisms/Header'
import { useRouter } from 'next/router'

const HeaderTitle: NextPage<HeaderProps> = (props) => {
	const { title } = props
	const router = useRouter()

	const backTop = async () => {
		await router.push('/')
	}

	return (
		<Box flex={1} onClick={backTop}>
			<Typography variant='h4'>{title}</Typography>
		</Box>
	)
}

export default HeaderTitle
