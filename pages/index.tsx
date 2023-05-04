import Head from 'next/head'
import TopPage from '@/components/templates/TopPage'
import { GetStaticProps } from 'next'
import { getMetaArticles } from '@/lib/blogs/generate'

// TODO: Create Props Type
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
			<TopPage cards={blogMeta} />
		</>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
	const metas = getMetaArticles()

	console.log('tmpData', metas)
	return {
		props: {
			blogMeta: metas,
		},
	}
}
