import React, { useState } from 'react';
import { FormPhoneProps as Props, FormPhoneDefaultProps } from './FormPhone.types';
import FormInputControl from '../FormInputControl';

const FormPhone: React.FC<Props> = (props) => {
  const [isPhoneError, setIsPhoneError] = useState(false);

  useEffect(() => {
    if (notEmpty(props.value)) {
      props.value && props.value.length >= 9 && props.value.replace(/-/g, '').length <= 11
        ? setIsPhoneError(false)
        : setIsPhoneError(true);
    }
  }, [props.value]);

  return <FormInputControl type='tel' error={isPhoneError} {...props} />;
};

FormPhone.displayName = 'FormPhone';
FormPhone.defaultProps = FormPhoneDefaultProps;

export default FormPhone;
