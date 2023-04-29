import ProfileAvatar from '../../components/atoms/ProfileAvatar'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ProfileAvatar> = {
	title: 'atoms/ProfileAvatar',
	component: ProfileAvatar,
}

export default meta

type Story = StoryObj<typeof ProfileAvatar>

export const Primary: Story = {
	render: () => (
		<ProfileAvatar alt='Mountain Forest' src='/Profile/yamamori-rice.jpg' />
	),
}
