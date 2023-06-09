import Header from '../../components/organisms/Header'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@mui/material'
import { theme } from '../../theme/theme'

const meta: Meta<typeof Header> = {
	title: 'organisms/Header',
	component: Header,
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

type Story = StoryObj<typeof Header>

export const Primary: Story = {
	args: {
		title: 'Sample Title',
	},
}
