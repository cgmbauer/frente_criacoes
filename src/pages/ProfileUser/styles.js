import styled from 'styled-components';

export const LoginContainer = styled.section`
  width: 100%;
  height: 100vh;
  max-width: 800px;

  padding: 10px 20px;
  margin: 0 auto;
  .profile {
    width: 50px;
    height: 50px;

    border-radius: 50%;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: var(--font-family-primary);
    font-weight: 400;
    color: var(--color-primary);
    font-size: 14px;

    margin: 35px 0 0 0;

    text-align: center;

    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const LoginTitle = styled.div`
  text-align: center;
  margin-top: 64px;
`;

export const LoginTitleText = styled.h1`
  margin: 0 auto;
  font-family: var(--font-family-primary);
  font-weight: 700;
  color: var(--color-primary);
`;

export const Form = styled.form`
  margin: 10px auto 0;

  display: flex;
  flex-direction: column;

  max-width: 400px;

  #orcamento{

  }

  input .vlrmax .vlrmin {
    display: flex;
    flex-direction:column
  }

  button {
    text-align: center;

    width: 226px;
    height: 37px;
    left: 607px;

    background: var(--bg-buttonDir);

    border: 0;
    border-radius: 10px;
    padding: 0px;
    margin: 18px auto 0;
    margin-bottom: 50px;

    color: var(--color-button);
    font-weight: 500;
    max-width: 400px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }

  }

  select {
    display: flex;
    align-items: center;

    border: none;
    border-radius: 10px;

    padding: 10px;
    margin-top: 5px;

    background: var(--bg-input);

    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 16px;
    color: var(--color-primary);
  }

  label {
    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 12px;
    color: var(--color-primary);

    margin-left: 6px;

    &:nth-child(n + 2) {
      margin-top: 10px;
    }
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: var(--font-family-primary);
    font-weight: 400;
    color: var(--color-primary);
    color: #484848;
    font-size: 14px;
    text-align: center;

    margin: 18px 0 0 0;

    transition: text-decoration 0.3s;

    &:hover {
      text-decoration: underline;
    }

`;
