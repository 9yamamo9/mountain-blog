import { GetStaticPaths, GetStaticProps } from 'next'
import { getMetaArticle, getMetaArticles } from '@/lib/blogs/generate'
import { Container } from '@mui/material'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'

// TODO: Create Props Type
const Blog = (props: any) => {
	const { slug, meta, content } = props

	return (
		<Container sx={{ pt: 12 }}>
			<ReactMarkdown remarkPlugins={[[remarkGfm]]}>{content}</ReactMarkdown>
		</Container>
	)
}

export default Blog

export const getStaticPaths: GetStaticPaths = async () => {
	const articleSlugs = getMetaArticles().map((meta) => {
		return { params: { blog: meta.slug } }
	})

	return {
		paths: articleSlugs,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	if (!context.params) return { props: {} }
	const slug = context.params.blog

	const { meta, content } = getMetaArticle(`${slug}.mdx`)

	return {
		props: {
			slug,
			meta,
			content,
		},
	}
}
