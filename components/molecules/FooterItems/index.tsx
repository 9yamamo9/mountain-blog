import FooterItem from '../../atoms/FooterItem'
import {
	AiFillGithub,
	FaLinkedin,
	FaTwitter,
	RiProfileLine,
} from 'react-icons/all'
import Grid2 from '@mui/material/Unstable_Grid2'

const FooterItems = () => {
	return (
		<Grid2 container direction='row' spacing={4}>
			<Grid2>
				<FooterItem
					iconComponent={<RiProfileLine size={24} />}
					name='Profile'
				/>
			</Grid2>

			<Grid2>
				<FooterItem
					iconComponent={<AiFillGithub size={24} />}
					name='GitHub'
					url='https://github.com/9yamamo9'
				/>
			</Grid2>

			<Grid2>
				<FooterItem
					iconComponent={<FaTwitter size={24} />}
					name='Twitter'
					url='https://twitter.com/9yamamo9'
				/>
			</Grid2>

			<Grid2>
				<FooterItem
					iconComponent={<FaLinkedin size={24} />}
					name='LinkedIn'
					url='https://www.linkedin.com/in/yuta-yamamori-786883175/'
				/>
			</Grid2>
		</Grid2>
	)
}

export default FooterItems
