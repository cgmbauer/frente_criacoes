import styled from 'styled-components';

export const OffersContainer = styled.main`
  width: 100%;
  height: 100vh;

  padding: 10px 20px;
`;

export const NavBar = styled.nav`
  position: relative;

  max-width: 800px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding-bottom: 10px;
  margin: 70px auto 0;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 1px;
    max-width: 800px;

    border-bottom: 1px solid #e5e5e5;
  }

  a {
    text-decoration: none;
    color: var(--color-primary);
    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 14px;

    &.selected {
      font-weight: 700;
    }

    &:first-child {
      margin-left: 30px;
    }

    &:nth-child(n + 2) {
      margin-left: 20px;

      @media (min-width: 600px) {
        margin-left: 50px;
      }
    }
  }
`;
