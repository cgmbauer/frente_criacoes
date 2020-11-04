import styled from 'styled-components';

export const HeaderContainer = styled.main`
  max-width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin: 0 auto;

  @media (min-width: 600px) {
    justify-content: center;

    margin: 40px auto 0;
  }

  img {
    width: 151px;
    height: 49px;

    @media (min-width: 600px) {
      width: 261px;
      height: 108px;
    }
  }
`;
