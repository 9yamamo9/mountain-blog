import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'
import Image from 'next/image'
import { NextPage } from 'next'
import { FcLikePlaceholder } from 'react-icons/all'

export type ArticleCardProps = {
	imageSrc?: string
	imageAlt?: string
	title: string
	describeMessage: string
}

const ArticleCard: NextPage<ArticleCardProps> = (props) => {
	const { imageSrc, imageAlt, title, describeMessage } = props

	return (
		<Card sx={{ maxWidth: 345 }}>
			{imageSrc && imageAlt && (
				<CardMedia sx={{ height: 160 }}>
					<Image
						src={imageSrc}
						alt={imageAlt}
						width={345}
						height={160}
						style={{ objectFit: 'cover' }}
					/>
				</CardMedia>
			)}
			<CardContent>
				<Typography variant='h5' component='div'>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{describeMessage}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<FcLikePlaceholder size={24} />
			</CardActions>
		</Card>
	)
}

export default ArticleCard
