import styled from 'styled-components';

export const OffersContainer = styled.main`
  width: 100%;
  height: 100%;

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

export const ReservationBox = styled.section`
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

export const ReservationInformations = styled.section`
  margin-left: 15px;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

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

    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 2px;

      svg {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        color: var(--color-secondary-cards);
      }
    }

    & + section {
      margin-top: 20px;

      button {
        font-family: var(--font-family-primary);
        font-size: 12px;
        font-weight: 500;
        color: var(--color-secondary);

        width: 80px;

        border: none;
        border-radius: 4px;

        background: var(--bg-button-aceitar);

        padding: 3px 4px;

        transition: opacity 0.3;

        &:hover {
          opacity: 0.9;
        }

        & + button {
          margin-left: 8px;
          background: var(--bg-button-recusar);
        }

        @media (min-width: 600px) {
          padding: 5px 4px;
        }
      }
    }
  }
`;
