import * as React from 'react';
import styles from './App.module.css';

import Counter from './containers/Counter';
import logo from './logo.svg';

/** Main app. */
class App extends React.Component {
  /** Render function for main app. */
  public render() {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <img alt="logo" className={styles.logo} src={logo} />
            <h1 className={styles.title}><div>React</div>Counter</h1>
          </header>
          <Counter />
        </div>
      </main>
    );
  }
}

export default App;
