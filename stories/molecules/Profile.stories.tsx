import Profile from '../../components/molecules/Profile'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Profile> = {
	title: 'molecules/Profile',
	component: Profile,
}

export default meta

type Story = StoryObj<typeof Profile>

export const Primary: Story = {
	render: () => <Profile />,
}
