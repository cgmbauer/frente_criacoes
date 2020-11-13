import React from 'react';

import { mask as masker, unMask } from 'remask';
import { Container } from './styles';

const InputMasked = ({ mask, onChange, value, ...props }) => {
  const handleChange = ev => {
    const originalValue = unMask(ev.target.value);
    // const maskedValue = masker(originalValue, mask);
    onChange(originalValue);
  };

  const handleValue = masker(value, mask);

  return (
    <Container>
      <p>R$</p>
      <input {...props} onChange={handleChange} value={handleValue} />
    </Container>
  );
};

export default InputMasked;
