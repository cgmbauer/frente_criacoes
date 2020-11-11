import styled from 'styled-components';

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
