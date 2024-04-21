import { Menu } from "@headlessui/react";
import { Case, WeightUnit } from "../../types";
import { Tag } from "../Tag";
import {
  DragHandleWrapper,
  ItemWrapper,
  MenuItem,
  MenuItems,
  MenuWrapper,
  MoreButton,
  Value,
} from "./Item.styles";

import dragHandle from "./draghandle.png";
import moreIcon from "./more.png";

type Props = {
  type: string;
  description: string;
  weight: number;
  unit: WeightUnit;
  quantity: number;
  itemCase: Case | null;
  canEdit: boolean;
  canDrag: boolean;
};
export const Item = ({
  canDrag,
  canEdit,
  type,
  description,
  itemCase,
  quantity,
  weight,
  unit,
}: Props) => {
  return (
    <ItemWrapper $canEdit={canEdit} $canDrag={canDrag} $itemCase={itemCase}>
      {canDrag && (
        <DragHandleWrapper>
          <img src={dragHandle} alt="draggable handle icon" />
        </DragHandleWrapper>
      )}
      <div>
        <b>{type}</b> {description}
      </div>
      {!!itemCase ? <Tag $variant="secondary">{itemCase}</Tag> : ""}
      <Value>
        {weight.toFixed(2)} {unit}
      </Value>

      <Value>x {quantity}</Value>
      {canEdit && (
        <MenuWrapper>
          <Menu>
            <MoreButton>
              <img src={moreIcon} alt="more icon" />
            </MoreButton>
            <MenuItems>
              <MenuItem>
                <div onClick={() => console.log("edit")}>Edit item</div>
              </MenuItem>
              <MenuItem>
                <div onClick={() => console.log("remove")}>
                  Remove from pack
                </div>
              </MenuItem>
            </MenuItems>
          </Menu>
        </MenuWrapper>
      )}
    </ItemWrapper>
  );
};
