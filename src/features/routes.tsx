import { JSX } from 'solid-js';
import Home from '../pages/home';
import About from '../pages/About';
import NotFound from '../pages/not-found';

export interface RouteType {
  label: string;
  href: string;
  component?: JSX.Element;
}

export const navItems: RouteType[] = [
  { label: 'Home', href: '/', component: <Home /> },
  { label: 'About Me', href: '/about', component: <About /> },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  { label: 'Not Found', href: '*', component: <NotFound /> },
];
