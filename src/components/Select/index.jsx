import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { SelectContainer } from './styles';

const Select = ({ children, name, ...props }) => {
  const selectRef = useRef(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <SelectContainer>
      <select ref={selectRef} {...props} defaultValue={defaultValue}>
        {children}
      </select>
    </SelectContainer>
  );
};

export default Select;
