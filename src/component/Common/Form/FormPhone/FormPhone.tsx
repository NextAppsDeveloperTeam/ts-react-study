import React from 'react';
import { FormPhoneProps as Props, FormPhoneDefaultProps } from './FormPhone.types';
import FormInputControl from '../FormInputControl';

const FormPhone: React.FC<Props> = ({ onValidate, ...props }) => {
  const handelValidate = useCallback(
    (value: string) => {
      const phoneLength = value.length >= 9 && value.replace(/-/g, '').length <= 11;
      if (notEmpty(value) && !phoneLength) {
        return '전화번호는 9~11자입니다.';
      }

      if (onValidate) {
        return onValidate(value);
      }

      return true;
    },
    [onValidate]
  );

  return <FormInputControl type='tel' onValidate={handelValidate} {...props} />;
};

FormPhone.displayName = 'FormPhone';
FormPhone.defaultProps = FormPhoneDefaultProps;

export default FormPhone;
