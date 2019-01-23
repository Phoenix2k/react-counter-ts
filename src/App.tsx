import * as React from 'react';
import './App.css';

import Counter from './containers/Counter';
import logo from './logo.svg';

/** Main app. */
class App extends React.Component {
  /** Render function for main app. */
  public render() {
    return (
      <main className="App">
        <div className="App-container">
          <header className="App-header">
            <img alt="logo" className="App-logo" src={logo} />
            <h1 className="App-title"><div>React</div>Counter</h1>
          </header>
          <Counter />
        </div>
      </main>
    );
  }
}

export default App;
