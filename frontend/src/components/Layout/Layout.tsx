import { ReactNode } from "react";
import { Header } from "../Header";
import { Main, Wrapper } from "./Layout.styles";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <>
    <Header />
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  </>
);
