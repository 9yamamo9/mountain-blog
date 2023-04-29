import HeaderTitle from '../../components/molecules/HeaderTitle'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof HeaderTitle> = {
	title: 'molecules/HeaderTitle',
	component: HeaderTitle,
}

export default meta

type Story = StoryObj<typeof HeaderTitle>

export const Primary: Story = {
	args: {
		title: 'Sample Title',
	},
}
