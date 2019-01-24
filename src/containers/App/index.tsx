import * as React from 'react';
import '../../styles/animations/spin-clockwise.css';
import { AnimatedImage, Container, Header, Main, Title } from './styles';

import Logo from '../../assets/logo.svg';
import Counter from '../Counter';

/** Main app. */
class App extends React.Component {
  /** Render function for main app. */
  public render() {
    return (
      <Main>
        <Container>
          <Header>
            <AnimatedImage alt="logo" src={Logo} />
            <Title><div>React</div>Counter</Title>
          </Header>
          <Counter />
        </Container>
      </Main>
    );
  }
}

export default App;
