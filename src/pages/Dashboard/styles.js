import styled, { css } from 'styled-components';

export const OffersContainer = styled.main`
  width: 100%;
  height: 100vh;

  max-width: 800px;

  padding: 10px 20px;
  margin: 0 auto;

  div {
    max-width: 800px;

    margin: 0 auto;

    h2 {
      font-family: var(--font-family-primary);
      font-size: 14px;
      font-weight: 400;
      color: var(--primary-color);

      margin-left: 10px;
    }
  }
`;

export const CardBox = styled.section`
  display: flex;
  flex-direction: row;

  padding: 10px;
  margin: 40px 10px 0;

  border: 1px solid #1a842f;
  border-radius: 6px;

  & + section {
    margin: 23px 10px 0;
  }

  img {
    width: 50px;
    height: 50px;

    border-radius: 50%;
  }

  @media (min-width: 600px) {
    padding: 15px 12px;
  }
`;

export const CardInformations = styled.section`
  margin-left: 15px;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  section {
    h3 {
      font-family: var(--font-family-primary);
      font-size: 18px;
      font-weight: 500;
      color: var(--primary-color);
    }

    p {
      font-family: var(--font-family-primary);
      font-size: 13px;
      font-weight: 500;
      color: var(--color-secondary-cards);
    }
  }
`;

export const AvailableSection = styled.section`
  margin-top: 10px;

  @media (min-width: 600px) {
    margin-top: 0;
  }

  > p {
    font-family: var(--font-family-primary);
    font-size: 13px;
    font-weight: 500;
    text-align: center;

    width: 100px;

    ${props =>
      props.isAvailable
        ? css`
            color: var(--bg-button-aceitar) !important;
            border: 1px solid var(--bg-button-aceitar) !important;
          `
        : css`
            color: var(--bg-button-recusar) !important;
            border: 1px solid var(--bg-button-recusar) !important;
          `};

    border-radius: 4px;

    background: transparent;

    padding: 3px 10px;

    @media (min-width: 600px) {
      padding: 2px 4px;
    }
  }
`;
