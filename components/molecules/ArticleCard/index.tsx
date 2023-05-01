import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Typography,
} from '@mui/material'
import Image from 'next/image'
import { NextPage } from 'next'
import { FcLikePlaceholder } from 'react-icons/all'
import Grid2 from '@mui/material/Unstable_Grid2'

export type ArticleCardProps = {
	imageSrc?: string
	imageAlt?: string
	title: string
	describeMessage: string
	tags?: string[]
	date: string
}

const ArticleCard: NextPage<ArticleCardProps> = (props) => {
	const { imageSrc, imageAlt, title, describeMessage, tags, date } = props

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
				<Typography
					variant='body2'
					color={'text.secondary'}
					display='flex'
					justifyContent='end'>
					{date}
				</Typography>
				<Grid2 container spacing={1} pt={1}>
					{tags?.map((tag) => {
						return (
							<Grid2 key={tag}>
								<Chip label={tag} color='primary' variant='outlined' />
							</Grid2>
						)
					})}
				</Grid2>
			</CardContent>
			{/*<CardActions disableSpacing>*/}
			{/*	<FcLikePlaceholder size={24} />*/}
			{/*</CardActions>*/}
		</Card>
	)
}

export default ArticleCard
