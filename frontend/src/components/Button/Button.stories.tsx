import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button.styles";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    $variant: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    $variant: "primary",
  },
};

export const Secondary: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    $variant: "secondary",
  },
};

export const Outline: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    $variant: "outline",
  },
};
