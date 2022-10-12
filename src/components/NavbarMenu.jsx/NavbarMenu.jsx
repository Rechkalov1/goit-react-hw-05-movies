import { NavLink } from 'react-router-dom';
import React from 'react';
import itemsMenu from 'components/itemsMenu';

export default function NavbarMenu() {
  const elements = itemsMenu.map(({ id, to, text }) => {
    return (
      <li key={id}>
        <NavLink to={to}>{text}</NavLink>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}
