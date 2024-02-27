import FooterItem from '../../components/atoms/FooterItem'
import { Meta, StoryObj } from '@storybook/react'
import { FaXTwitter } from 'react-icons/fa6'

const meta: Meta<typeof FooterItem> = {
	title: 'atoms/FooterItem',
	component: FooterItem,
}

export default meta

type Story = StoryObj<typeof FooterItem>

export const Primary: Story = {
	args: {
		iconComponent: <FaXTwitter size={36} />,
		name: 'Twitter',
	},
}
