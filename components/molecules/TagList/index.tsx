import { Box, Chip } from '@mui/material'
import { NextPage } from 'next'
import Grid2 from '@mui/material/Unstable_Grid2'

export type TagListProps = {
	tags: string[]
}

const TagList: NextPage<TagListProps> = ({ tags }) => {
	return (
		<Grid2 container justifyContent='center' spacing={1} sx={{ mx: 1 }}>
			{tags.map((tag) => {
				return (
					<Grid2 key={tag}>
						<Chip key={tag} label={tag} color='primary' variant='outlined' />
					</Grid2>
				)
			})}
		</Grid2>
	)
}

export default TagList
