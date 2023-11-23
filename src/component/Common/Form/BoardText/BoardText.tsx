import React, { KeyboardEvent } from 'react';
import { FormTextProps as Props, FormTextDefaultProps } from './BoardText.types';
import FormInputControl from '../FormInputControl';


const BoardText: React.FC<Props> = (props) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  }, []);

  return <FormInputControl type='text' onKeyDown={handleKeyDown} {...props} />;
};

BoardText.displayName = 'FormText';
BoardText.defaultProps = FormTextDefaultProps;

export default BoardText;
