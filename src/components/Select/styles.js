import styled from 'styled-components';

export const SelectContainer = styled.main`
  display: flex;
  align-items: center;

  min-height: 44px;
  border: none;
  border-radius: 10px;

  padding: 10px;

  background: var(--bg-input);

  select {
    flex: 1;

    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 16px;
    color: var(--color-primary);

    background: transparent;

    border: none;
  }
`;
