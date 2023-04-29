import Header from '../../components/organisms/Header'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Header> = {
	title: 'organisms/Header',
	component: Header,
}

export default meta

type Story = StoryObj<typeof Header>

export const Primary: Story = {
	args: {
		title: 'Sample Title',
	},
}
