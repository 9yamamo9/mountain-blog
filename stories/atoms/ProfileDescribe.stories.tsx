import ProfileDescribe from '../../components/atoms/ProfileDescribe'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ProfileDescribe> = {
	title: 'atoms/ProfileDescribe',
	component: ProfileDescribe,
}

export default meta

type Story = StoryObj<typeof ProfileDescribe>

export const Primary: Story = {
	args: {
		name: 'Sample Name',
		message: 'Sample message is too long. I will check the design.',
	},
}
