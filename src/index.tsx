/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import './index.css';
import App from './App';
import 'tailwindcss/tailwind.css';
render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
  document.getElementById('root') as HTMLElement,
);
