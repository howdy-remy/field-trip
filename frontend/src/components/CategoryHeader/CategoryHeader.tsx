import { ReactNode } from "react";
import { CategoryHeaderWrapper } from "./CategoryHeader.styles";
import Button from "../Button";

type Props = {
  children: ReactNode;
  canEdit?: boolean;
};

export const CategoryHeader = ({ children, canEdit }: Props) => (
  <CategoryHeaderWrapper>
    {children} {canEdit && <Button variant="secondary">Add Item</Button>}
  </CategoryHeaderWrapper>
);
