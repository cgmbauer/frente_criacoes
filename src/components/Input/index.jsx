import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

const Input = ({ name, ...rest }) => {
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
    <Container>
      <input ref={inputRef} {...rest} defaultValue={defaultValue} />
    </Container>
  );
};

export default Input;
