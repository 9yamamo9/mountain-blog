import { GetStaticPaths, GetStaticProps } from 'next'
import { getMetaArticle, getMetaArticles } from '@/lib/blogs/generate'
import { Container } from '@mui/material'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

// TODO: Create Props Type
const Blog = (props: any) => {
	const { slug, meta, content } = props
	const components = {
		pre: (pre: any) => {
			if (pre.children[0].type !== 'code') {
				return <pre>{pre.children}</pre>
			}

			const code = pre.children[0]
			const matchResult = code.props.className.match(/language-(\w+)(:(.+))?/)
			const language = matchResult?.[1] || ''

			return (
				<SyntaxHighlighter language={language} style={nord}>
					{code.props.children[0]}
				</SyntaxHighlighter>
			)
		},
	}

	return (
		<Container sx={{ pt: 12 }}>
			<ReactMarkdown remarkPlugins={[[remarkGfm]]} components={components}>
				{content}
			</ReactMarkdown>
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
