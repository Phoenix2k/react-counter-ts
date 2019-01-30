import styled from 'styled-components';

import { BREAKPOINTS } from '../../styles';
import {
  DEFAULT_APP_MAIN_BACKGROUND_COLOR,
  DEFAULT_APP_MAIN_TEXT_COLOR,
} from './defaults';

import '../../styles/themes/dark.css';
import '../../styles/themes/light.css';

export const AnimatedImage = styled.img`
  animation: spin-clockwise infinite 20s linear;
  height: 30vmin;
  margin-top: -4rem;

  @media (max-width: ${BREAKPOINTS.medium}) and (orientation: landscape) {
    height: 15vmin;
    margin-top: 1rem;
  }
`;

export const Container = styled.div`
  @media (max-width: ${BREAKPOINTS.medium}) and (orientation: landscape) {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 100%;
    text-align: center;
    width: 100%;

    & > * {
      width: 40%;
    }
  }
`;

export const Header = styled.header`
  font-size: calc(1rem + 1vmin);

  @media (max-width: ${BREAKPOINTS.medium}) and (orientation: landscape) {
    margin-top: 0;
  }
`;

export const Main = styled.main`
  align-items: center;
  background-color: var(
    --app-main-background-color,
    ${DEFAULT_APP_MAIN_BACKGROUND_COLOR}
  );
  color: var(--app-main-text-color, ${DEFAULT_APP_MAIN_TEXT_COLOR});
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: center;
  width: 100%;
`;

export const Title = styled.h1`
  margin: 1rem auto;

  div {
    font-size: 0.6em;
    font-weight: normal;
  }
`;
