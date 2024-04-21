import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from ".";

const meta = {
  title: "Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Sleep System",
  },
};

export const Secondary: Story = {
  args: {
    $variant: "secondary",
    children: "Sleep System",
  },
};
