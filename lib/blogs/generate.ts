import path from 'path'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'

const blogsDir = path.join(process.cwd(), '_blogs')

export const getArticleFileNames = () => {
	return readdirSync(blogsDir, { withFileTypes: true })
		.filter((dirent) => dirent.isFile())
		.map((dirent) => dirent.name)
}

export const getMetaArticle = (filename: string) => {
	const fullPath = path.join(blogsDir, filename)
	const fileContent = readFileSync(fullPath, 'utf8')
	const { data: meta } = matter(fileContent)
	return meta
}
