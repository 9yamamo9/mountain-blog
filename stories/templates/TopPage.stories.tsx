import TopPage from '../../components/templates/TopPage'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@mui/material'
import { theme } from '../../theme/theme'

const meta: Meta<typeof TopPage> = {
	title: 'templates/TopPage',
	component: TopPage,
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

type Story = StoryObj<typeof TopPage>

export const Primary: Story = {
	args: {
		cards: [
			{
				imageSrc: '/Profile/yamamori-rice.jpg',
				imageAlt: 'Mountain Forest',
				title: 'Mountain Forest',
				describe: 'Sample describe message',
				tags: [
					'sample',
					'test',
					'sample',
					'test',
					'sample',
					'test',
					'sample',
					'test',
				],
				date: '2023/04/30',
				linkUrl: 'sample-article',
			},
			{
				title: 'No Image',
				describe: 'No image describe message',
				date: '2023/05/01',
				linkUrl: 'sample-article',
			},
			{
				title: 'Third Content',
				describe: 'Third describe message',
				date: '2023/05/02',
				linkUrl: 'sample-article',
			},
		],
	},
}
