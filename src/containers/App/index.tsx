import * as React from 'react';
import Logo from '../../assets/logo.svg';
import '../../styles/animations/spin-clockwise.css';
import Counter from '../Counter';
import { DEFAULT_APP_THEME } from './defaults';
import { AnimatedImage, Container, Header, Main, Title } from './styles';
import { SetupTheme } from './themes';

class App extends React.Component {
  public componentDidMount() {
    SetupTheme(DEFAULT_APP_THEME);
  }
  public render() {
    return (
      <Main>
        <Container>
          <Header>
            <AnimatedImage alt="logo" src={Logo} />
            <Title>
              <span>React</span>Counter
            </Title>
          </Header>
          <Counter />
        </Container>
      </Main>
    );
  }
}

export default App;
