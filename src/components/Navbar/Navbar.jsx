import NavbarMenu from 'components/Navbar/NavbarMenu.jsx/NavbarMenu';
import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Nav } from './NavBar.styled';
export default function Navbar() {
  return (
    <Header>
      <Nav>
        <div>
          <Link to="/">Logo</Link>
        </div>
        <NavbarMenu />
      </Nav>
    </Header>
  );
}
