import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

  height: 56px;
  padding: 0 32px;
  background-color: ${({ theme }) => theme.colors.blue900};

  font-family: ${({theme}) => theme.fonts.bioRhyme};
  font-weight: 800;
  font-size: 24px;
  color: ${({theme}) => theme.colors.gold100};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: end;
  gap: 12px;
  width: 100%;
`

export const StyledHomeLink = styled(NavLink)`
  color: ${({theme}) => theme.colors.gold100};
  text-decoration: none;
  &:hover {
    color: ${({theme}) => theme.colors.white};
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  color: ${({theme}) => theme.colors.gold100};
  text-decoration: none;
  span {
    font-size: 11px;
  }
  &.active {
    text-decoration: underline;
  }
  &:hover {
    color: ${({theme}) => theme.colors.white};
  }
`