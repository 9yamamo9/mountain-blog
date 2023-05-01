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
		title: 'Sample Title',
		src: '/Profile/yamamori-rice.jpg',
		alt: 'Mountain Forest',
		name: 'Mountain Forest',
		message: 'Sample Message',
		cards: [
			{
				imageSrc: '/Profile/yamamori-rice.jpg',
				imageAlt: 'Mountain Forest',
				title: 'Mountain Forest',
				describeMessage: 'Sample describe message',
			},
			{
				title: 'No Image',
				describeMessage: 'No image describe message',
			},
			{
				title: 'Third Content',
				describeMessage: 'Third describe message',
			},
		],
	},
}