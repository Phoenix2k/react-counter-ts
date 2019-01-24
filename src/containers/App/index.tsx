import * as React from 'react';
import '../../animations/spin-clockwise.css';
import { Container, Header, Logo, Main, Title } from './styles';

import logo from '../../assets/logo.svg';
import Counter from '../../containers/Counter';

/** Main app. */
class App extends React.Component {
  /** Render function for main app. */
  public render() {
    return (
      <Main>
        <Container>
          <Header>
            <Logo alt="logo" src={logo} />
            <Title><div>React</div>Counter</Title>
          </Header>
          <Counter />
        </Container>
      </Main>
    );
  }
}

export default App;
