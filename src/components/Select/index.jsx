import React from 'react';

import { SelectContainer } from './styles';

const Select = ({ children, ...props }) => {
  return (
    <SelectContainer>
      <select {...props}>{children}</select>
    </SelectContainer>
  );
};

export default Select;
