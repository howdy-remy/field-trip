import { ReactNode } from "react";
import { Callout, PackHeaderWrapper, PageTitle } from "./PackHeader.styles";
import { WeightUnit } from "../../types";

type Props = {
  weight: number;
  unit: WeightUnit;
  children: ReactNode;
};

export const PackHeader = ({ children, weight, unit }: Props) => (
  <PackHeaderWrapper>
    <PageTitle>{children}</PageTitle>
    <Callout>
      {weight} <span>{unit}</span>
    </Callout>
  </PackHeaderWrapper>
);
