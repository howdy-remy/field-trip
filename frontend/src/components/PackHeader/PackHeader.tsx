import { ReactNode } from "react";
import { Callout, PackHeaderWrapper, PageTitle } from "./PackHeader.styles";

type Props = {
  children: ReactNode;
};

export const PackHeader = ({ children }: Props) => (
  <PackHeaderWrapper>
    <PageTitle>{children}</PageTitle>
    <Callout>
      0 <span>lbs</span>
    </Callout>
  </PackHeaderWrapper>
);
