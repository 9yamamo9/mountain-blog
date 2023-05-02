import { Box, Container, Toolbar, Typography } from '@mui/material'
import Header, { HeaderProps } from '../../organisms/Header'
import { NextPage } from 'next'
import SideBar from '../../organisms/SideBar'
import { ProfileProps } from '../../molecules/Profile'
import ArticleCards, { ArticleCardsProps } from '../../organisms/ArticleCards'
import Footer from '../../organisms/Footer'

type TopPageProps = HeaderProps & ProfileProps & ArticleCardsProps

const TopPage: NextPage<TopPageProps> = (props) => {
	const { title, src, alt, name, message, cards } = props

	return (
		<Box display='flex' flexDirection='column'>
			<Box display='flex'>
				<Header title={title} />
				<SideBar src={src} alt={alt} name={name} message={message} />
				<Container sx={{ mt: 12 }}>
					<Typography variant='h4'>New Articles</Typography>
					<ArticleCards cards={cards} />
				</Container>
			</Box>
			<Footer />
		</Box>
	)
}

export default TopPage
