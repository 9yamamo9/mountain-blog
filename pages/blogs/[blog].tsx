import { GetStaticPaths, GetStaticProps } from 'next'
import { getMetaArticles } from '@/lib/blogs/generate'
import dynamic from 'next/dynamic'

// TODO: Create Props Type
const Blog = (props: any) => {
	const { blog } = props
	const MDX = dynamic(() => import(`../../_blogs/posts/${blog}.mdx`))

	return (
		<>
			<MDX />
		</>
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

	return {
		props: {
			blog: slug,
		},
	}
}
