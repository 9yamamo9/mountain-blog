import { Card, Typography } from '@mui/material'
import { NextPage } from 'next'
import ArticleCards, { ArticleCardsProps } from '../../organisms/ArticleCards'

type TopPageProps = ArticleCardsProps

const TopPage: NextPage<TopPageProps> = (props) => {
	const { cards } = props

	return (
		<Card sx={{ p: 4, flexGrow: 1 }}>
			<Typography variant='h4' sx={{ mb: 2 }}>
				Latest Articles
			</Typography>
			<ArticleCards cards={cards} />
		</Card>
	)
}

export default TopPage
