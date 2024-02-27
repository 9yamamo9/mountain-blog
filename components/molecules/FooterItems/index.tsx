import FooterItem from '../../atoms/FooterItem'
import { FaGithub } from 'react-icons/fa'
import Grid2 from '@mui/material/Unstable_Grid2'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { RiProfileLine } from 'react-icons/ri'

const FooterItems = () => {
	return (
		<Grid2 container textAlign='center' spacing={2}>
			<Grid2>
				<FooterItem
					iconComponent={<RiProfileLine size={24} />}
					name='Profile'
					url='/profile'
				/>
			</Grid2>

			<Grid2>
				<FooterItem
					iconComponent={<FaGithub size={24} />}
					name='GitHub'
					url='https://github.com/9yamamo9'
				/>
			</Grid2>

			<Grid2>
				<FooterItem
					iconComponent={<FaXTwitter size={24} />}
					name='X'
					url='https://x.com/9yamamo9'
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
