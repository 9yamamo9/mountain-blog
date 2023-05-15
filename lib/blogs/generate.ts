import path from 'path'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import { BlogMeta } from '@/types/meta'

const blogsPostsDir = path.join(process.cwd(), '_blogs/posts')

const getArticleFileNames = () => {
	return readdirSync(blogsPostsDir, { withFileTypes: true })
		.filter((dirent) => dirent.isFile())
		.map((dirent) => dirent.name)
}

export const getMetaArticle = (filename: string) => {
	const fullPath = path.join(blogsPostsDir, filename)
	const fileContent = readFileSync(fullPath, 'utf8')
	const { data: meta, content } = matter(fileContent)
	return { meta, content }
}

// TODO: Create Meta Type
export const getMetaArticles = () => {
	return getArticleFileNames().map((filename) => {
		const { meta } = getMetaArticle(filename)
		const typedMeta = meta as BlogMeta

		return {
			...typedMeta,
			slug: filename.split(/\.mdx/)[0],
		}
	})
}
