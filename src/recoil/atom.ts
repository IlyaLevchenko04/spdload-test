import { atom } from 'recoil';

export const favoritesState = atom({
  key: 'favoritesState',
  default: JSON.parse(localStorage.getItem('favorites') as string) || [],
});

export const toursState = atom({
  key: 'toursState',
  default: [],
});
