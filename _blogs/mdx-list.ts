import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
type MDXBlogsType = { [key: string]: ComponentType }

export const MDXBlogs: MDXBlogsType = {
  'sample-article': dynamic(() => import('_blogs/sample-article.mdx'))
}
