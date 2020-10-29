import React from 'react';

import { Container } from './styles';

const Input = ({ ...props }) => {
  return (
    <Container>
      <input {...props} />
    </Container>
  );
};

export default Input;
