import HeaderItems from '../../components/molecules/HeaderItems'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof HeaderItems> = {
	title: 'molecules/HeaderItems',
	component: HeaderItems,
}

export default meta

type Story = StoryObj<typeof HeaderItems>

export const Primary: Story = {
	render: () => <HeaderItems />,
}
