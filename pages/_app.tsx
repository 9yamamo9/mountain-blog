import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { theme } from '@/theme/theme'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Header title={"Mountain Forest's Blog"} />
			<Component {...pageProps} />
			<Footer />
		</ThemeProvider>
	)
}
