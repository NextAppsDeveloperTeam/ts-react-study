import React, { KeyboardEvent } from 'react';
import { FormNameProps as Props, FormNameDefaultProps } from './FormName.types';
import FormText from '../FormText';

const FormName: React.FC<Props> = ({ onKeyDown, ...props }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === ' ') {
        e.preventDefault();
      } else {
        onKeyDown && onKeyDown(e);
      }
    },
    [onKeyDown]
  );

  return <FormText onKeyDown={handleKeyDown} {...props} />;
};

FormName.displayName = 'FormName';
FormName.defaultProps = FormNameDefaultProps;

export default FormName;
