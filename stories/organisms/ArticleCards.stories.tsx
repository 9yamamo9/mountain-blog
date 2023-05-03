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
				describe: 'Sample describe message',
				date: '2023/05/03',
				linkUrl: 'sample-article',
			},
			{
				title: 'No Image',
				describe: 'Sample no Image describe message',
				date: '2023/05/03',
				linkUrl: 'sample-article',
			},
		],
	},
}
