import MenuSlider from "./MenuSlider/menuslider";
import styled from "styled-components";

//We create the MenuSlider centered.
export const Menu = styled(MenuSlider)`
  margin: auto 16px auto 0;
`;

export const StyledNav = styled.nav`
  background-color: hsl(210, 29%, 24%);
  display: flex;
  position: sticky;
  height: 60px;
  z-index: 2;
  top: 0;
`;

//TODO: Change the h2 for a svg or image of the logo
export const NavLogo = styled.h2`
  color: white;
  flex-grow: 1;
  font-weight: 500;
  text-align: left;
  margin: auto 0 auto 16px;
  align-self: flex-start;
`;