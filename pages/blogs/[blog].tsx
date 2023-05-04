import { GetStaticPaths, GetStaticProps } from 'next'
import { Typography } from '@mui/material'
import { getMetaArticles } from '@/lib/blogs/generate'

// TODO: Create Props Type
const Blog = (props: any) => {
	const { blogs } = props

	return (
		<>
			<Typography>{blogs[0].blog}</Typography>
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
	return {
		props: {
			blogs: getMetaArticles().map((meta) => {
				return { blog: meta.slug }
			}),
		},
	}
}
