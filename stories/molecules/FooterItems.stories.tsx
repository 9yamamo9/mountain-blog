import FooterItems from '../../components/molecules/FooterItems'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof FooterItems> = {
	title: 'molecules/FooterItems',
	component: FooterItems,
}

export default meta

type Story = StoryObj<typeof FooterItems>

export const Primary: Story = {
	render: () => <FooterItems />,
}
