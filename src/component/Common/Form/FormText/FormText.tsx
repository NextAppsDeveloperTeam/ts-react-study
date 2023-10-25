import React, { KeyboardEvent } from 'react';
import { FormTextProps as Props, FormTextDefaultProps } from './FormText.types';
import FormInputControl from '../FormInputControl';

const FormText: React.FC<Props> = ({ value: initValue, onChange, ...props }) => {
  const [value, setValue] = useState(initValue || '');

  useEffect(() => {
    setValue(initValue || '');
  }, [initValue]);

  const handleChange = useCallback(
    (newValue: string) => {
      const finalValue = newValue.replace(/ /g, '');
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
      type='text'
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
};

FormText.displayName = 'FormText';
FormText.defaultProps = FormTextDefaultProps;

export default FormText;
