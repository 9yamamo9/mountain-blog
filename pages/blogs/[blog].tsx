import { GetStaticPaths, GetStaticProps } from 'next'
import { Typography } from '@mui/material'
import { getArticleFileNames } from '@/lib/blogs/generate'

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
	const articleSlugs = getArticleFileNames().map((articleFileName) => {
		return { params: { blog: articleFileName.split(/\.mdx/)[0] } }
	})

	return {
		paths: articleSlugs,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {
			blogs: getArticleFileNames().map((articleFileName) => {
				return { blog: articleFileName.split(/\.mdx/)[0] }
			}),
		},
	}
}
