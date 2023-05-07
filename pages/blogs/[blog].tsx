import { GetStaticPaths, GetStaticProps } from 'next'
import { getMetaArticle, getMetaArticles } from '@/lib/blogs/generate'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Container } from '@mui/material'

// TODO: Create Props Type
const Blog = (props: any) => {
	const { slug, meta, mdxSource } = props

	return (
		<Container sx={{ pt: 12 }}>
			<MDXRemote {...mdxSource} />
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
	const mdxSource = await serialize(content)

	return {
		props: {
			slug,
			meta,
			mdxSource,
		},
	}
}
