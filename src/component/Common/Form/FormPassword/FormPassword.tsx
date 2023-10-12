import React, { useState } from 'react';
import { FormPasswordProps as Props, FormPasswordDefaultProps } from './FormPassword.types';
import FormInputControl from '../FormInputControl';

const FormPassword: React.FC<Props> = (props) => {
  const [isPwdError, setIsPwdError] = useState(false);

  const passwordRegEx = useMemo(() => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,16}$/;
  }, []);

  useEffect(() => {
    if (notEmpty(props.value)) {
      props.value && passwordRegEx.test(props.value) ? setIsPwdError(false) : setIsPwdError(true);
    }
  }, [passwordRegEx, props.value]);

  return <FormInputControl type='password' error={isPwdError} {...props} />;
};

FormPassword.displayName = 'FormPassword';
FormPassword.defaultProps = FormPasswordDefaultProps;

export default FormPassword;
