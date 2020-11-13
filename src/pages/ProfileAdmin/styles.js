import styled from 'styled-components';

import { Form } from '@unform/web';

export const SignupProfileAdmin = styled.section`
  width: 100%;
  height: 100%;

  padding: 10px 20px 100px;

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
  img.profile {
    margin-top: 30px;
    width: 100px;
    height: 100px;
    text-align: center;
    border-radius: 50%;
  }
`;

export const SignupTitle = styled.div`
  text-align: center;
  margin-top: 54px;
`;

export const SignupTitleText = styled.h1`
  margin: 0 auto;
  font-family: var(--font-family-primary);
  font-weight: 700;
  color: var(--color-primary);
`;

export const UForm = styled(Form)`
  margin: 50px auto 0;

  display: flex;
  flex-direction: column;

  max-width: 400px;

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

  button {
    width: 60%;

    background: var(--bg-button);

    border: 0;
    border-radius: 10px;

    padding: 10px;
    margin: 50px auto 0;

    color: #e9eff9;
    font-weight: 500;

    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }
`;
