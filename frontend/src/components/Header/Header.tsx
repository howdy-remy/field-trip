import { HeaderWrapper, Nav, StyledHomeLink, StyledLink } from "./Header.styles"

export const Header = () => {
  return (
    <HeaderWrapper>
      <StyledHomeLink to="/">FieldTrip</StyledHomeLink>
      <Nav>
        <StyledLink to="/packs">
          <span>01.</span>Packs
        </StyledLink>
        <StyledLink to="/trips">
          <span>02.</span>Trips
        </StyledLink>
        <StyledLink to="/gear">
          <span>03.</span>Gear
        </StyledLink>
        <StyledLink to="/account">
          <span>04.</span>Account
        </StyledLink>
      </Nav>
    </HeaderWrapper>
  )
}