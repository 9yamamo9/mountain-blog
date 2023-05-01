import Head from 'next/head'
import TopPage from '@/components/templates/TopPage'

export default function Home() {
	return (
		<>
			<Head>
				<title>Mountain Forest's blog</title>
				<meta name='description' content="Mountain Forest's blog" />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/mountain-forest-logo.png' />
			</Head>
			<TopPage
				title="Mountain Forest's blog"
				src='/Profile/yamamori-rice.jpg'
				alt='MF'
				name='Muntain Forest'
				message="I'm a software engineer."
				cards={[]}
			/>
		</>
	)
}
