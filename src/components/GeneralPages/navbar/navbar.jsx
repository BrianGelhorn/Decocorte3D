import React from "react";
import {Menu, StyledNav, NavLogo} from './navbarstyles';

const NavBar = () => {
  return (
    <StyledNav>
      <NavLogo>Decocorte 3D</NavLogo>
      <Menu></Menu>
    </StyledNav>
  );
};

export default NavBar;
