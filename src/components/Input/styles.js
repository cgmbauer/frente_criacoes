import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  border: none;
  border-radius: 10px;

  padding: 10px;
  margin-top: 5px;

  background: var(--bg-input);

  input {
    flex: 1;

    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 16px;
    color: var(--color-primary);

    background: transparent;

    border: none;

    ::placeholder {
      color: var(--color-placeholder);
    }
  }
`;
