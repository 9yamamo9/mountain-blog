import { OgObjectInteral } from 'open-graph-scraper/dist/lib/types'
import { NextPage } from 'next'

type LinkCardProps = {
	href?: string
	text?: string
	title?: string
	opgData: OgObjectInteral[]
}

const LinkCard: NextPage<LinkCardProps> = ({ href, text, title, opgData }) => {
	return (
		<>
			{
				<a href={href} target='_blank' rel='noreferrer'>
					${text}
				</a>
			}
		</>
	)
}

export default LinkCard
