import TagList from '../../components/molecules/TagList'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@mui/material'
import { theme } from '../../theme/theme'

const meta: Meta<typeof TagList> = {
	title: 'molecules/TagList',
	component: TagList,
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

type Story = StoryObj<typeof TagList>

export const Primary: Story = {
	args: {
		tags: ['Next.js', 'React', 'AWS', 'Terraform', 'IaC', 'GitHub Actions'],
	},
}
