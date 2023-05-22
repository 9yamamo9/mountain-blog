import { GetStaticPaths, GetStaticProps } from 'next'
import { getMetaArticle, getMetaArticles } from '@/lib/blogs/generate'
import { Box, Card, Toolbar, Typography } from '@mui/material'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import BlockQuote from '@/components/atoms/BlockQuote'
import Image from 'next/image'
import ImageInBlog from '@/components/atoms/ImageInBlog'
import Grid2 from '@mui/material/Unstable_Grid2'
import SideBar from '@/components/organisms/SideBar'
import Head from 'next/head'
import YouTube from 'react-youtube'
import TweetEmbed from 'react-tweet-embed'

// TODO: Create Props Type
const Blog = (props: any) => {
	const { slug, meta, content, reducedAllTags } = props

	const components = {
		a: (a: any) => {
			const href: string = a.href

			if (href.indexOf('#')) {
				const url = new URL(href)

				if (url.origin.includes('youtube.com')) {
					return (
						<Box textAlign='center'>
							<YouTube videoId={url.searchParams.get('v') as string} />
						</Box>
					)
				}

				if (url.origin.indexOf('twitter.com')) {
					const pathNames = url.pathname.split('/')
					return (
						<TweetEmbed
							key={pathNames[3]}
							tweetId={pathNames[3]}
							options={{ align: 'center' }}
						/>
					)
				}
			}
			return <a {...a} />
		},
		img: (img: any) => {
			return <ImageInBlog src={img.src} alt={img.alt} />
		},
		blockquote: (blockquote: any) => {
			return <BlockQuote message={blockquote.children[1].props.children} />
		},
		pre: (pre: any) => {
			if (pre.children[0].type !== 'code') {
				return <pre>{pre.children}</pre>
			}

			const code = pre.children[0]
			const matchResult = code.props.className.match(/language-(\w+)(:(.+))?/)
			const language = matchResult?.[1] || ''

			return (
				<SyntaxHighlighter language={language} style={nord}>
					{code.props.children[0]}
				</SyntaxHighlighter>
			)
		},
	}

	return (
		<Box sx={{ backgroundColor: 'lightgrey' }}>
			<Head>
				<title>{"Mountain Forest's blog"}</title>
				<meta name='description' content="Mountain Forest's blog" />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/mountain-forest-logo.png' />
			</Head>
			<Toolbar />

			<Grid2
				container
				direction='row'
				spacing={2}
				justifyContent='center'
				sx={{ backgroundColor: 'lightgrey' }}>
				<Grid2 xs={0} md={2} sx={{ px: 0 }}>
					<SideBar
						src='/Profile/yamamori-rice.jpg'
						alt='MF'
						name='Mt. Forest'
						message="I'm a software engineer."
						tags={reducedAllTags}
					/>
				</Grid2>
				<Grid2 xs={12} md={8}>
					<Card sx={{ px: 4, pb: 4, flexGrow: 1 }}>
						<Box textAlign='center'>
							<Typography variant='h2'>{meta.title}</Typography>
							<Image
								src={meta.imageSrc}
								alt={meta.imageAlt}
								width='800'
								height='300'
								style={{ objectFit: 'contain' }}
							/>
						</Box>
						<ReactMarkdown
							remarkPlugins={[[remarkGfm]]}
							components={components}>
							{content}
						</ReactMarkdown>
					</Card>
				</Grid2>
			</Grid2>
		</Box>
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

	const allTags: string[] = []
	const metas = getMetaArticles()
	metas.forEach((meta) => {
		return meta.tags?.forEach((tag) => allTags.push(tag))
	})
	const reducedAllTags = Array.from(new Set(allTags)).sort()

	return {
		props: {
			slug,
			meta,
			content,
			reducedAllTags,
		},
	}
}
