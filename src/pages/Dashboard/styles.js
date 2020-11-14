import styled, { css } from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;

  position: relative;
`;

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

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);

  cursor: pointer;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

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

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);

  cursor: pointer;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

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
      max-width: 70px;

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

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);

  cursor: pointer;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

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

  cursor: pointer;

  transition: box-shadow 0.1s;

  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  }

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

    width: 110px;

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

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 330px;
  height: auto;
  min-height: 300px;

  background: #f4f4f4;

  padding-bottom: 50px;

  svg.closeModal {
    align-self: flex-end;
    margin-top: 15px;
    margin-right: 20px;

    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ModalContainerDates = styled.div`
  ${props =>
    props.isOpen
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin: 30px auto 0;

  img {
    width: 100px;
    height: 100px;

    border-radius: 50%;
  }

  h2 {
    font-family: var(--font-family-primary);
    font-size: 25px;
    font-weight: 700;
    color: var(--color-primary);

    margin-top: 25px;
  }

  p {
    font-family: var(--font-family-primary);
    font-size: 14px;
    font-weight: 500;
    color: var(--color-primary);

    margin-top: 7px;
  }
`;

export const Calendar = styled.div`
  width: 200px;
  height: 100%;
  min-height: 120px;
  display: flex;
  flex-direction: column;

  margin-top: 40px;

  border: 1px solid #dbdbdb;
  border-radius: 4px;

  div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: #000;

    border-top-right-radius: 4px;
    border-top-left-radius: 4px;

    padding: 5px;

    h3 {
      font-family: var(--font-family-primary);
      font-size: 20px;
      font-weight: 500;
      color: var(--color-secondary);
    }

    > svg {
      width: 20px;
      height: 20px;

      color: var(--color-secondary);

      margin: 0;

      align-self: initial;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 10px;

    p {
      font-family: var(--font-family-primary);
      font-size: 14px;
      font-weight: 500;
      color: var(--color-primary);
    }
  }
`;

export const ModalContainerReservation = styled.div`
  ${props =>
    props.isOpen
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
`;

export const ModalData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 30px;

  div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg {
      width: 22px;
      height: 22px;
      margin-right: 8px;
    }

    h2 {
      font-family: var(--font-family-primary);
      font-size: 25px;
      font-weight: 700;
      color: var(--color-primary);
    }
  }

  > h3 {
    font-family: var(--font-family-primary);
    font-size: 14px;
    font-weight: 500;
    color: var(--color-primary);

    margin-top: 40px;
    margin-left: 15px;

    align-self: flex-start;
  }

  > p {
    font-family: var(--font-family-primary);
    font-size: 12px;
    font-weight: 500;
    color: var(--color-primary);

    margin-top: 20px;
    margin-left: 15px;
  }
`;

export const ReservationBox = styled.section`
  display: flex;
  flex-direction: row;

  width: 280px;

  padding: 10px;
  margin: 15px 10px 0;

  border: 1px solid var(--color-box-cards-green);
  border-radius: 6px;

  & + section {
    margin: 23px 10px 0;
  }

  img {
    width: 50px;
    height: 50px;

    border-radius: 50%;
  }
`;

export const ReservationInformations = styled.section`
  margin-left: 15px;

  section {
    > h3 {
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
      margin-top: 4px;

      svg {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        color: var(--color-secondary-cards);
      }
    }
    }
  }
`;

export const ModalContainerTopDates = styled.section`
  ${props =>
    props.isOpen
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
`;

export const CardBoxDates = styled.section`
  width: auto;

  margin: 40px 0 0;
  padding: 10px 15px;

  border: none;
  border-radius: 4px;

  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);

  font-family: var(--font-family-primary);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-primary);

  & + section {
    margin-top: 20px;
  }
`;

export const CardBoxTopArtist = styled.section`
  width: 300px;

  margin: 40px 0 0;
  padding: 10px 15px;

  border: none;
  border-radius: 4px;

  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);

  h3 {
    font-family: var(--font-family-primary);
    font-size: 18px;
    font-weight: 500;
    color: var(--color-primary);
  }

  & + section {
    margin-top: 20px;
  }
`;
