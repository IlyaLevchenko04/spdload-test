import { nanoid } from 'nanoid';

export const NAV_ENUM: { name: string; id: string; path: string }[] = [
  { name: 'HOME', id: nanoid(), path: '/' },
  { name: 'TOURS', id: nanoid(), path: 'tours' },
  { name: 'ABOUT', id: nanoid(), path: 'about' },
  { name: 'HELP', id: nanoid(), path: 'help' },
];
