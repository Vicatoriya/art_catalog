import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import ImagePage from '../pages/ImagePage';

export const ROUTES = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/favorites',
    component: Favorites,
  },
  {
    path: '/image/:id',
    component: ImagePage,
  },
];
