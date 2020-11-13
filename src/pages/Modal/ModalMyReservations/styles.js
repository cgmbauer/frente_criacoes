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
  height: auto;

  background-color: rgba(78, 89, 131, 0.5);
  backdrop-filter: blur(5px);

  z-index: 999;
`;

export const Dialog = styled.div`
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% - 144px);
  width: 472px;
  min-height: 755px;
  overflow: scroll;
  height: 100%;
  top: 310px;
  left: 484px;
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);
  border-radius: 8px;
  .divCloseModal {
    display: flex;
    justify-content: flex-end;
  }

  h2 {
    margin-top: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: var(--font-family-primary);
    font-size: 25px;
    font-weight: 400;
    color: var(--primary-color);
    justify-content: center;
    .iconDiv {
      margin-right: 10px;
      svg {
        width: 50px;
      }
    }
  }

  h5 {
    text-align: start;
    margin: 40px 0 20px 40px !important;
  }
`;

export const CardBox = styled.section`
  display: flex;
  flex-direction: row;
  width: 347px;
  height: 121px;

  padding: 10px;
  margin: 10px 40px 0;

  border: 1px solid var(--color-box-cards-green);
  border-radius: 6px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);

  & + section {
    margin: 23px 40px 0;
  }

  img {
    width: 50px;
    height: 50px;
    margin-top: 5px;

    border-radius: 50%;
  }

  @media (min-width: 600px) {
    padding: 15px 12px;
  }
`;
export const CardInformations = styled.section`
  margin-left: 20px;
  margin-bottom: 25px;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }
  svg {
    margin-right: 5px;
    color: grey;
    margin-top: 10px;
  }

  section {
    h3 {
      margin-bottom: 1px;
      margin-top: 25px;
      font-family: var(--font-family-primary);
      font-size: 18px;
      font-weight: 500;
      color: var(--primary-color);
    }

    p {
      margin-top: 10px;
      font-family: var(--font-family-primary);
      font-size: 13px;
      font-weight: 500;
      color: var(--color-secondary-cards);
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
