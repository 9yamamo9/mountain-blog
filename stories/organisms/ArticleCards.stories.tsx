import ArticleCards from '../../components/organisms/ArticleCards'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@mui/material'
import { theme } from '../../theme/theme'

const meta: Meta<typeof ArticleCards> = {
	title: 'organisms/ArticleCards',
	component: ArticleCards,
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

type Story = StoryObj<typeof ArticleCards>

export const Primary: Story = {
	args: {
		cards: [
			{
				imageSrc: '/Profile/yamamori-rice.jpg',
				imageAlt: 'Mountain Forest',
				title: 'Mountain Forest',
				describeMessage: 'Sample describe message',
			},
			{
				title: 'No Image',
				describeMessage: 'Sample no Image describe message',
			},
		],
	},
}
