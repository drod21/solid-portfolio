import { For } from 'solid-js';
import { navItems } from '../../features/routes';
import NavItem from './nav-item';

export default function Nav() {
  return (
    <nav class='flex items-center justify-end p-4 bg-gray-800'>
      <For each={navItems.filter((x) => x.label !== 'Not Found')}>{(item) => <NavItem {...item} />}</For>
    </nav>
  );
}
