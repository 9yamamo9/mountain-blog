import Head from 'next/head'
import TopPage from '@/components/templates/TopPage'
import { GetStaticProps } from 'next'
import { getArticleFileNames, getMetaArticle } from '@/lib/blogs/generate'

const Home = (props: any) => {
	const { blogMeta } = props
	return (
		<>
			<Head>
				<title>{"Mountain Forest's blog"}</title>
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
				cards={blogMeta}
			/>
		</>
	)
}

export default Home

export const getStaticProps: GetStaticProps = (context) => {
	const articleFileNames = getArticleFileNames()

	// TODO: Get article's meta
	const meta = articleFileNames.map((filename) => {
		return getMetaArticle(filename)
	})

	console.log('tmpData', meta)
	return {
		props: {
			blogMeta: meta,
		},
	}
}
