import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
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
