import { Routes, Route } from '@solidjs/router';
import { For } from 'solid-js';
import { navItems } from '../features/routes';

import Header from './header/header';

export default function RootLayout() {
  return (
    <div class='flex flex-col min-h-screen'>
      {/* header at the top of the page with links to the routes below */}
      <Header />
      <Routes>
        <For each={navItems}>{(item) => <Route path={item.href} element={item.component} />}</For>
      </Routes>
    </div>
  );
}
