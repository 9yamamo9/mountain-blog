import Image from 'next/image'
import { NextPage } from 'next'
import { Box } from '@mui/material'

type ImageInBlogProps = {
	src: string
	alt: string
}

const ImageInBlog: NextPage<ImageInBlogProps> = ({ src, alt }) => {
	return (
		<Box textAlign='center'>
			<Image
				src={src}
				alt={alt}
				width={500}
				height={300}
				style={{ objectFit: 'contain' }}
			/>
		</Box>
	)
}

export default ImageInBlog
