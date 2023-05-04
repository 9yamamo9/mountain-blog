import path from 'path'
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import matter from 'gray-matter'
import { format } from 'prettier'

const blogsPostsDir = path.join(process.cwd(), '_blogs/posts')

export const getArticleFileNames = () => {
	return readdirSync(blogsPostsDir, { withFileTypes: true })
		.filter((dirent) => dirent.isFile())
		.map((dirent) => dirent.name)
}

export const getMetaArticle = (filename: string) => {
	const fullPath = path.join(blogsPostsDir, filename)
	const fileContent = readFileSync(fullPath, 'utf8')
	const { data: meta } = matter(fileContent)
	return meta
}

export const createMdxImport = () => {
	const slugs = getArticleFileNames().map((articleFileName) => {
		return articleFileName.split(/\.mdx/)[0]
	})
	const targetPath = `${path.join(process.cwd(), '_blogs')}/mdx-list.ts`
	const stringifiedImports = slugs
		.map((slug) => `'${slug}': dynamic(() => import('_blogs/${slug}.mdx'))`)
		.join(',')
	const stringifiedFileContent = `
	import dynamic from 'next/dynamic'
	import { ComponentType } from 'react'
	type MDXBlogsType = { [key: string]: ComponentType }
	
	export const MDXBlogs: MDXBlogsType = {${stringifiedImports}}
	`
	const formattedContent = format(stringifiedFileContent, {
		singleQuote: true,
		semi: false,
		trailingComma: 'none',
		parser: 'typescript',
	})
	writeFileSync(targetPath, formattedContent)
}
