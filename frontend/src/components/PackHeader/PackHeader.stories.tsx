import type { Meta, StoryObj } from "@storybook/react";
import { PackHeader } from "./PackHeader";
import { WeightUnit } from "../../types";

const meta = {
  title: "Pack Header",
  component: PackHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PackHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "page title",
    weight: 0,
    unit: WeightUnit.LB,
  },
};
