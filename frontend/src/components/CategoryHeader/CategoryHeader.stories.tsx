import type { Meta, StoryObj } from "@storybook/react";
import { CategoryHeader } from "./CategoryHeader";

const meta = {
  title: "Category Header",
  component: CategoryHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CategoryHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "category",
    canEdit: false,
  },
};

export const CanEdit: Story = {
  args: {
    children: "category",
    canEdit: true,
  },
};
