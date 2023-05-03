import { Container, Typography } from '@mui/material'
import { NextPage } from 'next'
import ArticleCards, { ArticleCardsProps } from '../../organisms/ArticleCards'

type TopPageProps = ArticleCardsProps

const TopPage: NextPage<TopPageProps> = (props) => {
	const { cards } = props

	return (
		<Container sx={{ mt: 12 }}>
			<Typography variant='h4'>New Articles</Typography>
			<ArticleCards cards={cards} />
		</Container>
	)
}

export default TopPage
