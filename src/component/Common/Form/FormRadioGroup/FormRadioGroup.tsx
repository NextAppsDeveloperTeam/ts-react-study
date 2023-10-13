import React from 'react';
import {
  FormRadioGroupProps as Props,
  FormRadioGroupDefaultProps,
  FormRadioGroupItemValue,
} from './FormRadioGroup.types';
import FormControl from '../FormControl';

function FormRadioGroup<T extends FormRadioGroupItemValue>({
  value: initValue,
  name,
  items,
  onChange,
  ...props
}: Props<T>) {
  const [value, setValue] = useState<T | undefined>(initValue);

  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  const changeValue = useCallback(
    (value: T) => {
      setValue(value);
      onChange && onChange(value);
    },
    [onChange]
  );

  return (
    <FormControl name={name} value={value} {...props}>
      {items.map((item) => (
        <label key={item.value}>
          <input type='radio' name={`FormRadioGroup_${name}`} onClick={() => changeValue(item.value)} />
          {item.label}
        </label>
      ))}
    </FormControl>
  );
}

FormRadioGroup.displayName = 'FormRadioGroup';
FormRadioGroup.defaultProps = FormRadioGroupDefaultProps;

export default FormRadioGroup;
