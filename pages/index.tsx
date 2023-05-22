import Head from 'next/head'
import TopPage from '@/components/templates/TopPage'
import { GetStaticProps } from 'next'
import { getMetaArticles } from '@/lib/blogs/generate'
import { Box, Toolbar } from '@mui/material'
import SideBar from '@/components/organisms/SideBar'
import Grid2 from '@mui/material/Unstable_Grid2'

const Home = (props: any) => {
	const { blogMetas, allTags } = props
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
						tags={allTags}
					/>
				</Grid2>
				<Grid2 xs={12} md={8}>
					<TopPage cards={blogMetas} />
				</Grid2>
			</Grid2>
		</Box>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
	const metas = getMetaArticles()

	const allTags: string[] = []
	metas.forEach((meta) => {
		return meta.tags?.forEach((tag) => allTags.push(tag))
	})
	const reducedAllTags = Array.from(new Set(allTags)).sort()

	return {
		props: {
			blogMetas: metas,
			allTags: reducedAllTags,
		},
	}
}
