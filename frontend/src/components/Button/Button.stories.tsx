import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button.styles';
import { ThemeProvider } from 'styled-components';
import theme from '../../util/theme';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: 'primary'
  }
};

export const Secondary: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: 'secondary'
  }
};

export const Outline: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: 'outline'
  }
};