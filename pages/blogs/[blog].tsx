import { GetStaticPaths, GetStaticProps } from 'next'
import { getMetaArticle, getMetaArticles } from '@/lib/blogs/generate'
import { Box, Container, Typography } from '@mui/material'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import BlockQuote from '@/components/atoms/BlockQuote'
import Image from 'next/image'
import ImageInBlog from '@/components/atoms/ImageInBlog'

// TODO: Create Props Type
const Blog = (props: any) => {
	const { slug, meta, content } = props

	const components = {
		img: (img: any) => {
			return <ImageInBlog src={img.src} alt={img.alt} />
		},
		blockquote: (blockquote: any) => {
			return <BlockQuote message={blockquote.children[1].props.children} />
		},
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
			<Box textAlign='center'>
				<Typography variant='h2'>{meta.title}</Typography>
				<Image
					src={meta.imageSrc}
					alt={meta.imageAlt}
					width='800'
					height='300'
					style={{ objectFit: 'contain' }}
				/>
			</Box>
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
