import styled from 'styled-components';

export const AnimatedImage = styled.img`
  animation: spin-clockwise infinite 20s linear;
  height: var(--app-header-logo-height, 30vmin);
  margin-top: -4rem;

  @media (max-width: 767px) and (orientation: landscape) {
    height: var(--app-header-logo-height-landscape, 15vmin);
    margin-top: 1rem;
  }
`;

export const Container = styled.div`
  @media (max-width: 767px) and (orientation: landscape) {
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
  color: var(--app-header-background-color, white);
  font-size: var(--app-header-font-size, calc(1rem + 1vmin));

  @media (max-width: 767px) and (orientation: landscape) {
    margin-top: 0;
  }
`;

export const Main = styled.main`
  align-items: center;
  background-color: #282c34;
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
