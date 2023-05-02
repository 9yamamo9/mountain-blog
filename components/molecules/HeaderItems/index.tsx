import HeaderItem from '../../atoms/HeaderItem'
import {
	AiFillGithub,
	FaLinkedin,
	FaTwitter,
	RiProfileLine,
} from 'react-icons/all'
import Grid2 from '@mui/material/Unstable_Grid2'

const HeaderItems = () => {
	return (
		<Grid2 container direction='row' spacing={4}>
			<Grid2>
				<HeaderItem
					iconComponent={<RiProfileLine size={36} />}
					name='Profile'
				/>
			</Grid2>

			<Grid2>
				<HeaderItem iconComponent={<AiFillGithub size={36} />} name='GitHub' />
			</Grid2>

			<Grid2>
				<HeaderItem iconComponent={<FaTwitter size={36} />} name='Twitter' />
			</Grid2>

			<Grid2>
				<HeaderItem iconComponent={<FaLinkedin size={36} />} name='LinkedIn' />
			</Grid2>
		</Grid2>
	)
}

export default HeaderItems
