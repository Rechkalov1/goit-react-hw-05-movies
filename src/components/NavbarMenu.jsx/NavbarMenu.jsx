import { NavLink } from 'react-router-dom';
import React from 'react';
import { nanoid } from 'nanoid';
import { Ul, Li } from './NavbarMenu.styled';

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
        <NavLink to={to}>{text}</NavLink>
      </Li>
    );
  });
  return <Ul>{elements}</Ul>;
}
