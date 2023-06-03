import { OgObjectInteral } from 'open-graph-scraper/dist/lib/types'
import { NextPage } from 'next'
import { Box, Card, Divider, Typography } from '@mui/material'
import Image from 'next/image'

type LinkCardProps = {
	href?: string
	text?: string
	title?: string
	ogpDataList: OgObjectInteral[]
}

const LinkCard: NextPage<LinkCardProps> = ({ href, text, ogpDataList }) => {
	const filteredOgpDataList = ogpDataList.filter(
		(data) => href === data.requestUrl
	)
	const ogpData = filteredOgpDataList[0]
	console.log(ogpData)

	const { ogImage } = ogpData
	const image = Array.isArray(ogImage) ? ogImage[0] : ogImage
	const title = ogpData.ogTitle || 'title'
	const describe = ogpData.ogDescription

	return (
		<a
			href={href}
			target='_blank'
			rel='noreferrer'
			style={{ textDecoration: 'none' }}>
			<Card>
				<Box display='flex' flexDirection='row' alignItems='center'>
					{image && (
						<Image
							src={image.url}
							alt={title}
							width={160}
							height={90}
							style={{ objectFit: 'cover' }}
						/>
					)}
					<Divider orientation='vertical' sx={{ color: 'black' }} />
					<Box>
						<Typography variant='body1'>{title}</Typography>
						<Typography variant='body2'>{describe}</Typography>
					</Box>
				</Box>
			</Card>
		</a>
	)
}

export default LinkCard
