import { Container, Typography } from '@mui/material'
import { NextPage } from 'next'
import ArticleCards, { ArticleCardsProps } from '../../organisms/ArticleCards'

type TopPageProps = ArticleCardsProps

const TopPage: NextPage<TopPageProps> = (props) => {
	const { cards } = props

	return (
		<>
			<Typography variant='h4'>New Articles</Typography>
			<ArticleCards cards={cards} />
		</>
	)
}

export default TopPage
