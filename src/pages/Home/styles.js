import styled from 'styled-components';

export const HomeContainer = styled.main`
  max-width: 800px;
  padding: 10px;
  margin: 0 auto;
  flex-direction: row;
`;
export const HomeTitle = styled.div`
  text-align: center;
  margin-top: 44px;

  @media (min-width: 600px) {
    margin-top: 72px;
  }
`;
export const HomeTitleText = styled.h1`
  margin: 0 auto;
  font-family: var(--font-family-primary);
  font-weight: 700;
  color: var(--color-primary);
  font-size: 22px;
`;

export const BoxCardSelect = styled.section`
  margin: 70px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CardAdmin = styled.div`
  flex-direction: column;
  text-align: center;

  div {
    display: flex;
    align-items: center;
    width: 130px;
    height: 130px;
    border: none;
    border-radius: 10px;
    background-color: #d6b92d;
    transition: transform 700ms;

    &:hover {
      z-index: 1;
      transform: scale(1.2);
    }

    .admin {
      width: 70%;
      height: 80%;
      margin: 0 auto;
    }
  }

  p {
    font-family: var(--font-family-primary);
    font-weight: bolder;
    color: var(--color-primary);
    font-size: 16px;
    text-align: center;
    margin-top: 15px;
  }
`;

export const CardUser = styled.div`
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    width: 130px;
    height: 130px;
    border: none;
    border-radius: 10px;
    background-color: #f25e74;
    transition: transform 1s;
    &:hover {
      z-index: 1;
      transform: scale(1.2);
    }
    .user {
      width: 70%;
      height: 80%;
      margin: 0 auto;
    }
  }
  p {
    font-family: var(--font-family-primary);
    font-weight: bolder;
    color: var(--color-primary);
    font-size: 16px;
    text-align: center;
    margin-top: 15px;
  }
`;
