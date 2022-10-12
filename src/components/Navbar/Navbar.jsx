import NavbarMenu from 'components/NavbarMenu.jsx/NavbarMenu';
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav>
      <div>
        <div>
          <Link to="/">Logo</Link>

          <NavbarMenu />
        </div>
      </div>
    </nav>
  );
}
