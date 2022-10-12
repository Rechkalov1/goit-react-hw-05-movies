import { nanoid } from 'nanoid';

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

export default itemsMenu;
