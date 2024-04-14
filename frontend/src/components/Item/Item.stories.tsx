import type { Meta, StoryObj } from "@storybook/react";
import { Item } from "./Item";
import { Case, WeightUnit } from "../../types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 900px;
`;

const meta = {
  title: "Item",
  component: Item,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    itemCase: { control: "radio", options: ["Worn", "Consumable", null] },
    unit: { control: "radio", options: ["lb", "oz", "g", "kg"] },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "Pack",
    description: "HMG Southwest 5700 — 55L — Black",
    weight: 34.78,
    unit: WeightUnit.OZ,
    quantity: 1,
    itemCase: Case.WORN,
    canEdit: true,
    canDrag: true,
  },
};

export const CantDrag: Story = {
  args: {
    type: "Pack",
    description: "HMG Southwest 5700 — 55L — Black",
    weight: 34.78,
    unit: WeightUnit.OZ,
    quantity: 1,
    itemCase: Case.WORN,
    canEdit: true,
    canDrag: false,
  },
};

export const CantEdit: Story = {
  args: {
    type: "Pack",
    description: "HMG Southwest 5700 — 55L — Black",
    weight: 34.78,
    unit: WeightUnit.OZ,
    quantity: 1,
    itemCase: Case.WORN,
    canEdit: false,
    canDrag: true,
  },
};

export const CantDragOrEdit: Story = {
  args: {
    type: "Pack",
    description: "HMG Southwest 5700 — 55L — Black",
    weight: 34.78,
    unit: WeightUnit.OZ,
    quantity: 1,
    itemCase: Case.WORN,
    canEdit: false,
    canDrag: false,
  },
};

export const NoCase: Story = {
  args: {
    type: "Pack",
    description: "HMG Southwest 5700 — 55L — Black",
    weight: 34.78,
    unit: WeightUnit.OZ,
    quantity: 1,
    itemCase: null,
    canEdit: true,
    canDrag: true,
  },
};
