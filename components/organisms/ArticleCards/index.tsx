import { NextPage } from 'next'
import ArticleCard, { ArticleCardProps } from '../../molecules/ArticleCard'
import Grid2 from '@mui/material/Unstable_Grid2'

export type ArticleCardsProps = {
	cards: ArticleCardProps[]
}
const ArticleCards: NextPage<ArticleCardsProps> = (props) => {
	const { cards } = props

	return (
		<Grid2
			container
			direction='row'
			justifyContent='center'
			alignItems='center'
			spacing={3}>
			{cards.map((card) => {
				return (
					<Grid2 key={card.title} xs={12} md={4}>
						<ArticleCard
							imageSrc={card.imageSrc}
							imageAlt={card.imageAlt}
							title={card.title}
							describeMessage={card.describeMessage}
							tags={card.tags}
							date={card.date}
						/>
					</Grid2>
				)
			})}
		</Grid2>
	)
}

export default ArticleCards
