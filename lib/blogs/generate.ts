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

export const createMdxImport = () => {
	const slugs = getMetaArticles().map((meta) => meta.slug)
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
