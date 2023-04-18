import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from '@/components/layouts/layout';

const meta: Meta<typeof Layout> = {
  title: 'Layout',
  component: Layout,
};

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  render: () => (
    <Layout>
      <p>This is a component wrapped in a layout</p>
    </Layout>
  ),
};

export default meta;
