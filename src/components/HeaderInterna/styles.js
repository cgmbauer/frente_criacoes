import styled from 'styled-components';

export const HeaderContainer = styled.main`
  max-width: 800px;
  height: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  @media (min-width: 600px) {
    margin: 10px auto 0;
  }

  img {
    width: 151px;
    height: 49px;

    @media (min-width: 600px) {
      width: 261px;
      height: 108px;
    }
  }

  button {
    background: transparent;

    border: none;

    svg {
      width: 13px;
      height: 13px;

      transition: opacity 0.3s, color 0.3s;

      &:hover {
        opacity: 0.8;
        color: var(--bg-button-recusar);
      }
    }
  }
`;
