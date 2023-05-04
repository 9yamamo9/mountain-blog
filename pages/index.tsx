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
			<TopPage cards={blogMeta} />
		</>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
	const articleFileNames = getArticleFileNames()

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
