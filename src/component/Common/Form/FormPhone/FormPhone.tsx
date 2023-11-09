import React, { KeyboardEvent } from 'react';
import { FormPhoneProps as Props, FormPhoneDefaultProps } from './FormPhone.types';
import FormInputControl from '../FormInputControl';

const FormPhone: React.FC<Props> = ({ onValidate, value: initValue, onChange, ...props }) => {
  const [value, setValue] = useState(initValue || '');

  useEffect(() => {
    setValue(initValue || '');
  }, [initValue]);

  const handleValidate = useCallback(() => {
    const phoneLength = value.length >= 9 && value.replace(/-/g, '').length <= 11;
    if (notEmpty(value) && !phoneLength) {
      return '전화번호는 9~11자입니다.';
    }

    if (onValidate) {
      return onValidate(value);
    }

    return true;
  }, [onValidate, value]);

  const handleChange = useCallback(
    (newValue: string) => {
      const finalValue = newValue.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3');
      setValue(finalValue);
      onChange && onChange(finalValue);
    },
    [onChange]
  );

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  }, []);

  return (
    <FormInputControl
      type='tel'
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onValidate={handleValidate}
      {...props}
    />
  );
};

FormPhone.displayName = 'FormPhone';
FormPhone.defaultProps = FormPhoneDefaultProps;

export default FormPhone;
