import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  min-height: 44px;

  border: none;
  border-radius: 10px;

  padding: 10px;
  margin-top: 5px;

  background: var(--bg-input);

  input {
    flex: 1;

    width: 100%;

    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 16px;
    color: var(--color-input);

    background: transparent;

    border: none;

    ::placeholder {
      color: var(--color-placeholder);
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px var(--bg-input) inset !important;
    }
  }
`;
