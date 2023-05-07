import path from 'path'
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import matter from 'gray-matter'
import { format } from 'prettier'

const blogsPostsDir = path.join(process.cwd(), '_blogs/posts')

const getArticleFileNames = () => {
	return readdirSync(blogsPostsDir, { withFileTypes: true })
		.filter((dirent) => dirent.isFile())
		.map((dirent) => dirent.name)
}

const getMetaArticle = (filename: string) => {
	const fullPath = path.join(blogsPostsDir, filename)
	const fileContent = readFileSync(fullPath, 'utf8')
	const { data: meta } = matter(fileContent)
	return meta
}

// TODO: Create Meta Type
export const getMetaArticles = () => {
	return getArticleFileNames().map((filename) => {
		return {
			...getMetaArticle(filename),
			slug: filename.split(/\.mdx/)[0],
		}
	})
}
