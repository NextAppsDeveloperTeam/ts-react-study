import React, { KeyboardEvent } from 'react';
import { FormTextProps as Props, FormTextDefaultProps } from './FormText.types';
import FormInputControl from '../FormInputControl';

const FormText: React.FC<Props> = (props) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  }, []);

  return <FormInputControl type='text' onKeyDown={handleKeyDown} {...props} />;
};

FormText.displayName = 'FormText';
FormText.defaultProps = FormTextDefaultProps;

export default FormText;
