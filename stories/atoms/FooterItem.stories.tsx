import FooterItem from '../../components/atoms/FooterItem'
import { Meta, StoryObj } from '@storybook/react'
import { FaTwitter } from 'react-icons/all'

const meta: Meta<typeof FooterItem> = {
	title: 'atoms/FooterItem',
	component: FooterItem,
}

export default meta

type Story = StoryObj<typeof FooterItem>

export const Primary: Story = {
	args: {
		iconComponent: <FaTwitter size={36} />,
		name: 'Twitter',
	},
}
