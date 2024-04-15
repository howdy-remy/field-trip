import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "input",
    label: "Label",
    placeholder: "placeholder",
  },
};

export const Password: Story = {
  args: {
    id: "input",
    label: "Password",
    placeholder: "password",
    type: "password",
  },
};

export const WithError: Story = {
  args: {
    id: "input",
    label: "Label",
    placeholder: "placeholder",
    error: "There was an error",
  },
};
