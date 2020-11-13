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
  justify-content: center;
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
    margin-top: 45px;
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
        margin-top: 4px;
      }
    }
  }
`;

export const CardBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 132px;
  text-align: center;
  height: 52px;

  padding: 10px;
  margin: 35px 150px 0;

  border: white;
  border-radius: 6px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);

  @media (min-width: 600px) {
    padding: 15px 20px;
  }
`;
