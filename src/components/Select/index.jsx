import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { SelectContainer } from './styles';

const Select = ({ children, name, ...props }) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <SelectContainer>
      <select {...props}>{children}</select>
    </SelectContainer>
  );
};

export default Select;
