import { GetStaticPaths, GetStaticProps } from 'next'
import { getMetaArticle, getMetaArticles } from '@/lib/blogs/generate'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Container } from '@mui/material'
import { remarkCodeHike } from '@code-hike/mdx'
import { CH } from '@code-hike/mdx/components'
import theme from 'shiki/themes/monokai.json'
import remarkGfm from 'remark-gfm'
import remarkEmbedder from '@remark-embedder/core'
import oembedTransformer from '@remark-embedder/transformer-oembed'

const components = { CH }

// TODO: Create Props Type
const Blog = (props: any) => {
	const { slug, meta, mdxSource } = props

	return (
		<Container sx={{ pt: 12 }}>
			<MDXRemote {...mdxSource} components={components} />
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
	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [
				[remarkCodeHike, { theme, autoImport: false }],
				[remarkGfm],
				[remarkEmbedder, { transformers: [oembedTransformer] }],
			],
			useDynamicImport: true,
		},
	})

	return {
		props: {
			slug,
			meta,
			mdxSource,
		},
	}
}
