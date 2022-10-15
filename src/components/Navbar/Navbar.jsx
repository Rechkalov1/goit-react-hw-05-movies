import NavbarMenu from 'components/Navbar/NavbarMenu.jsx/NavbarMenu';
import React from 'react';

import { Header, Nav } from './NavBar.styled';
export default function Navbar() {
  return (
    <Header>
      <Nav>
        <NavbarMenu />
      </Nav>
    </Header>
  );
}
