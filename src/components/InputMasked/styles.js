import styled from 'styled-components';

export const Container = styled.div`
  border: none;
  border-radius: 10px;
  position: relative;

  min-height: 44px;

  padding: 10px;
  margin-top: 5px;

  background: var(--bg-input);

  flex-direction: row;
  p {
    position: absolute;
    top: 15px;
    left: 7px;
    z-index: 1;
    font-size: 12px;
    color: var(--color-placeholder);
  }
  input {
    padding-left: 18px;
    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 12px;
    color: var(--color-primary);
    background: transparent;
    border: none;

    ::placeholder {
      color: var(--color-placeholder);
    }
  }
`;
