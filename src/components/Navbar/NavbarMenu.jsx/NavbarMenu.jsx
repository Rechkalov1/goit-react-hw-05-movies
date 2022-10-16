import React from 'react';
import { nanoid } from 'nanoid';
import { Ul, Li, NavItem } from './NavbarMenu.styled';

const itemsMenu = [
  {
    text: 'Home',
    id: nanoid(),
    to: '/',
  },
  {
    text: 'Movies',
    id: nanoid(),
    to: '/movies',
  },
];

export default function NavbarMenu() {
  const elements = itemsMenu.map(({ id, to, text }) => {
    return (
      <Li key={id}>
        <NavItem to={to} end>
          {text}
        </NavItem>
      </Li>
    );
  });
  return <Ul>{elements}</Ul>;
}
