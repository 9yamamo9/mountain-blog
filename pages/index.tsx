import Head from 'next/head'
import TopPage from '@/components/templates/TopPage'

export default function Home() {
	return (
		<>
			<Head>
				<title>深夜の怠惰な技術ブログ</title>
				<meta name='description' content='深夜の怠惰な技術ブログ' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/mountain-forest-logo.png' />
			</Head>
			<TopPage
				title="Mountain Forest's blog"
				src='/Profile/yamamori-rice.jpg'
				alt='MF'
				name='Muntain Forest'
				message="I'm a software engineer."
				cards={[
					{
						imageSrc: '/Profile/yamamori-rice.jpg',
						imageAlt: 'Mountain Forest',
						title: 'Mountain Forest',
						describeMessage: 'Sample describe message',
						tags: ['sample', 'test'],
						date: '2023/04/30',
						url: 'sample-article',
					},
				]}
			/>
		</>
	)
}
