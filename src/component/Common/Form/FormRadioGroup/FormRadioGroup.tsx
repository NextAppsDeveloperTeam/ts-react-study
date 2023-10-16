import React from 'react';
import {
  FormRadioGroupProps as Props,
  FormRadioGroupDefaultProps,
  FormRadioGroupItemValue,
} from './FormRadioGroup.types';
import FormControl from '../FormControl';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-block;
  margin: 10px 50px 0 30px;
`;

const Input = styled.input`
  margin-right: 5px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
`;

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
        <Label key={item.value}>
          <Input
            type='radio'
            name={`FormRadioGroup_${name}`}
            onClick={() => changeValue(item.value)}
            checked={item.value !== undefined ? value === item.value : undefined}
          />
          {item.label}
        </Label>
      ))}
    </FormControl>
  );
}

FormRadioGroup.displayName = 'FormRadioGroup';
FormRadioGroup.defaultProps = FormRadioGroupDefaultProps;

export default FormRadioGroup;
