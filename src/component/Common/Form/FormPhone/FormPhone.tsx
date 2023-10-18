import React from 'react';
import { FormPhoneProps as Props, FormPhoneDefaultProps } from './FormPhone.types';
import FormInputControl from '../FormInputControl';

const FormPhone: React.FC<Props> = ({ onValidate, ...props }) => {
  if (props.value) {
    props.value = props.value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3');
  }

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

  // useEffect((value?: string) => {
  //     if(value && onChange) {
  //         return onChange(value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3'));
  //     }
  // }, [onChange]);

  return <FormInputControl type='tel' onValidate={handelValidate} {...props} />;
};

FormPhone.displayName = 'FormPhone';
FormPhone.defaultProps = FormPhoneDefaultProps;

export default FormPhone;
