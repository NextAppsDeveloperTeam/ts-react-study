import React, { useState } from 'react';
import { FormChkPwdProps as Props, FormChkPwdDefaultProps } from './FormChkPwd.types';
import FormInputControl from '../FormInputControl';

const FormChkPwd: React.FC<Props> = (props) => {
  const [isChkPwdError, setIsChkPwdError] = useState(false);

  useEffect(() => {
    if (notEmpty(props.value)) {
      props.value && props.value ? setIsChkPwdError(true) : setIsChkPwdError(false);
    }
  }, [props.value]);
  return <FormInputControl type='password' error={isChkPwdError} {...props} />;
}; 

FormChkPwd.displayName = 'FormChkPwd';
FormChkPwd.defaultProps = FormChkPwdDefaultProps;

export default FormChkPwd;
