import ArticleCard from '../../components/molecules/ArticleCard'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@mui/material'
import { theme } from '../../theme/theme'

const meta: Meta<typeof ArticleCard> = {
	title: 'molecules/ArticleCard',
	component: ArticleCard,
	decorators: [
		(Story) => {
			return (
				<ThemeProvider theme={theme}>
					<Story />
				</ThemeProvider>
			)
		},
	],
}

export default meta

type Story = StoryObj<typeof ArticleCard>

export const Primary: Story = {
	args: {
		imageSrc: '/Profile/yamamori-rice.jpg',
		imageAlt: 'Mountain Forest',
		title: 'Mountain Forest',
		describe: 'Sample describe message',
	},
}
