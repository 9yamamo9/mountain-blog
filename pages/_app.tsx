import type { AppProps } from 'next/app'
import { Box, Container, ThemeProvider } from '@mui/material'
import { theme } from '@/theme/theme'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import SideBar from '@/components/organisms/SideBar'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Header title={"Mountain Forest's Blog"} />
			<Box display='flex' flexDirection='row'>
				<SideBar
					src='/Profile/yamamori-rice.jpg'
					alt='MF'
					name='Mountain Forest'
					message="I'm a software engineer"
				/>
				<Container sx={{ pt: 12 }}>
					<Component {...pageProps} />
				</Container>
			</Box>
			<Footer />
		</ThemeProvider>
	)
}
