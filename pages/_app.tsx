import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { theme } from '@/theme/theme'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import SideBar from '@/components/organisms/SideBar'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Header title={"Mountain Forest's Blog"} />
			<SideBar
				src='/Profile/yamamori-rice.jpg'
				alt='MF'
				name='Mountain Forest'
				message="I'm a software engineer"
			/>
			<Component {...pageProps} />
			<Footer />
		</ThemeProvider>
	)
}
