import styled, { css } from 'styled-components';

export const OffersContainer = styled.main`
  width: 100%;
  height: 100%;

  max-width: 800px;

  padding: 10px 20px 40px;
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

export const StatisticBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  margin: 0 auto;
`;

export const ReservationSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 164px;
  min-width: 127px;

  padding: 10px;

  border-radius: 4px;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);

  @media (min-width: 345px) {
    width: 40%;
  }

  @media (min-width: 410px) {
    max-width: 203px;
  }

  @media (min-width: 620px) {
    max-width: 150px;
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 3px;

    h4 {
      max-width: 87px;

      font-family: var(--font-family-primary);
      font-size: 14px;
      font-weight: 700;
      color: var(--color-cards-admin);
    }

    svg {
      width: 20px;
      height: 14px;

      color: var(--bg-button);
    }
  }

  p {
    font-family: var(--font-family-primary);
    font-size: 30px;
    font-weight: 700;
    color: var(--color-cards-admin);

    margin: 17px 0 0 10px;
  }
`;

export const DateSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 164px;
  min-width: 127px;

  padding: 10px;

  border-radius: 4px;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);

  @media (min-width: 345px) {
    width: 50%;
  }

  @media (min-width: 410px) {
    max-width: 203px;
  }

  @media (min-width: 550px) {
    max-width: 230px;
  }

  @media (min-width: 620px) {
    max-width: 150px;
  }

  @media (min-width: 665px) {
    max-width: 160px;
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 3px;

    h4 {
      max-width: 87px;

      font-family: var(--font-family-primary);
      font-size: 14px;
      font-weight: 700;
      color: var(--color-cards-admin);
    }

    svg {
      width: 20px;
      height: 14px;

      color: var(--bg-button);
    }
  }

  p {
    font-family: var(--font-family-primary);
    font-size: 17px;
    font-weight: 700;
    color: var(--color-cards-admin);

    margin: 17px 0 0 10px;

    & + p {
      margin-top: 7px;
    }
  }
`;

export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  height: auto;

  padding: 10px;
  margin-top: 30px;

  border-radius: 4px;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);

  @media (min-width: 620px) {
    min-width: 272px;
    max-width: 380px;
    height: 164px;

    margin-top: 0;
  }

  @media (min-width: 750px) {
    flex: 1;
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 3px;

    h4 {
      max-width: 87px;

      font-family: var(--font-family-primary);
      font-size: 14px;
      font-weight: 700;
      color: var(--color-cards-admin);

      @media (min-width: 620px) {
        max-width: 47px;
      }
    }

    svg {
      width: 20px;
      height: 14px;

      color: var(--bg-button);
    }
  }

  p {
    font-family: var(--font-family-primary);
    font-size: 17px;
    font-weight: 700;
    color: var(--color-cards-admin);

    margin: 17px 0 0 10px;

    & + p {
      margin-top: 7px;
    }
  }
`;

export const FilterBox = styled.section`
  margin-top: 90px;

  h3 {
    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 16px;
    color: var(--color-primary);
  }

  select {
    width: 116px;

    border: none;
    border-radius: 10px;

    padding: 10px;
    margin: 22px 20px 0 0;

    background: var(--bg-input);

    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 16px;
    color: var(--color-primary);
  }
`;

export const CardBox = styled.section`
  display: flex;
  flex-direction: row;

  padding: 10px;
  margin: 40px 0 0;

  border: 1px solid var(--color-box-cards-gold);
  border-radius: 6px;

  & + section {
    margin: 23px 0 0;
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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background-color: rgba(78, 89, 131, 0.5);
  backdrop-filter: blur(5px);

  z-index: 999;
`;

export const Dialog = styled.div`
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% - 144px);
  width: 472px;
  height: 561px;
  top: 310px;
  left: 484px;
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);
  border-radius: 8px;
  text-align: center;
  .divCloseModal {
    display: flex;
    justify-content: flex-end;
  }
  .profile {
    width: 100px;
    height: 100px;
    align-items: center;
    border-radius: 50%;
    top: 100px;
  }
  h2 {
    font-family: var(--font-family-primary);
    font-size: 30px;
    font-weight: 400;
    color: var(--primary-color);

    margin-left: 10px;
  }
  h5 {
    font-family: var(--font-family-primary);
    font-size: 15px;
    font-weight: 400;
    color: var(--primary-color);

    margin-left: 10px;
  }
`;

export const CalendarBox = styled.div`
  margin-left: 90px;
  margin-top: 100px;
  width: 249px;
  height: 184px;
  border: 1px solid #000000;
  border-radius: 6px;

  div {
    width: 100%;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-radius: 5px;
    width: 249px;
    height: 40px;

    h3 {
      color: #ffffff;
      font-size: 15px;
    }
  }
`;

export const CalendarInformations = styled.section`
  background-color: #ffffff;
  padding: 20px;
  li {
    color: #000;
    text-align: center;
    font-size: 13px;
  }
`;
