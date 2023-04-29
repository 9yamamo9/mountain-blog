import SideBar from '../../components/organisms/SideBar'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SideBar> = {
	title: 'organisms/SideBar',
	component: SideBar,
}

export default meta

type Story = StoryObj<typeof SideBar>

export const Primary: Story = {
	render: () => <SideBar />,
}
