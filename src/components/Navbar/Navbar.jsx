import NavbarMenu from 'components/Navbar/NavbarMenu.jsx/NavbarMenu';
import React from 'react';

import { HeaderWrapper, Nav } from './NavBar.styled';
export default function Navbar() {
  return (
    <HeaderWrapper>
      <Nav>
        <NavbarMenu />
      </Nav>
    </HeaderWrapper>
  );
}
