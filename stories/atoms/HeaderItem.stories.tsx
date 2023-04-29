import HeaderItem from '../../components/atoms/HeaderItem'
import { ComponentStory, Meta, StoryObj } from '@storybook/react'
import { FaTwitter } from 'react-icons/all'

const meta: Meta<typeof HeaderItem> = {
	title: 'atoms/HeaderItem',
	component: HeaderItem,
}

export default meta

type Story = StoryObj<typeof HeaderItem>

export const Primary: Story = {
	args: {
		iconComponent: <FaTwitter size={36} />,
		name: 'Twitter',
	},
}
