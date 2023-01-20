import type { Component } from 'solid-js';
import styles from './App.module.css';
import RootLayout from './layouts/root';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <RootLayout />
    </div>
  );
};

export default App;
