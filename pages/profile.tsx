import Head from 'next/head'
import {
	Box,
	Card,
	Divider,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	Toolbar,
	Typography,
} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import ProfileAvatar from '@/components/atoms/ProfileAvatar'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Profile = () => {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<Box sx={{ backgroundColor: 'lightgrey', pb: 1.5 }}>
			<Head>
				<title>{'Profile'}</title>
				<meta name='description' content='Profile' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/mountain-forest-logo.png' />
			</Head>
			<Toolbar />

			<Grid2
				container
				justifyContent='center'
				sx={{ backgroundColor: 'lightgrey' }}>
				<Grid2 xs={11} md={8}>
					<Card sx={{ textAlign: 'center', py: 8 }}>
						<Typography variant='h2'>Profile</Typography>

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
							}}>
							<ProfileAvatar src='/Profile/yamamori-rice.jpg' alt='yamamori' />
						</Box>

						<Typography variant='h5'>MF | Mt. Forest</Typography>

						<Typography variant='body1' sx={{ mb: 1 }}>
							{
								"I'm a software engineer. I'm interested in TypeScript, AWS and Serverless."
							}
						</Typography>

						<Divider variant='middle' sx={{ my: 8 }} />

						<Typography variant='h2'>Resume</Typography>

						<Box display='flex' flexDirection='row' justifyContent='center'>
							<Stepper orientation='vertical'>
								<Step key={'now'}>
									<StepLabel>
										<Typography variant='h6'>
											Amazon Web Services Japan G.K.
										</Typography>
									</StepLabel>
									<StepContent sx={{ textAlign: 'start' }}>
										<Typography variant='body1'>
											1st.Jan.2021 - Current
										</Typography>
									</StepContent>
								</Step>

								<Step key={'previous'} active={true}>
									<StepLabel>
										<Typography variant='h6'>KDDI Corporation</Typography>
									</StepLabel>
									<StepContent sx={{ textAlign: 'start' }}>
										<Typography variant='body1'>
											1st.April.2014 - 31st.December.2020
										</Typography>
									</StepContent>
								</Step>
							</Stepper>
						</Box>

						<Divider variant='middle' sx={{ my: 8 }} />

						<Typography variant='h2'>Awards</Typography>

						<Box
							display='flex'
							flexDirection='column'
							justifyContent='center'
							mb={1}>
							<Typography sx={{ textAlign: 'start', px: '30%' }}>
								{isClient && (
									<li>APJ Professional Services Excellence Award 2022年3Q</li>
								)}
							</Typography>
						</Box>

						<Divider variant='middle' sx={{ my: 8 }} />

						<Typography variant='h2'>Contents</Typography>

						<Box display='flex' flexDirection='column'>
							<Link href='https://aws.amazon.com/jp/builders-flash/202209/master-asynchronous-execution-04/?awsf.filter-name=*all'>
								第4回 非同期処理の設計上の検討ポイント - builders.flash
							</Link>
							<Link href='https://www.youtube.com/watch?v=i7msA8Iq4j4&t=65s&pp=ygUNYXdzIOmdnuWQjOacnw%3D%3D'>
								T5-2: サーバーレスサービスを活用した非同期処理のはじめの一歩 |
								Builders Online Series 2023年1月開催
							</Link>
						</Box>
					</Card>
				</Grid2>
			</Grid2>
		</Box>
	)
}

export default Profile
