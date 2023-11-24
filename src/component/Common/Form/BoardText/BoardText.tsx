import React, { ChangeEvent } from 'react';
import { BoardTextProps as Props, BoardTextDefaultProps, BoardTextValue } from './BoardText.types';
import FormControl from '../FormControl';
import styled from 'styled-components';

const Input = styled.input`
  width: 520px;
  height: 35px;
  padding-left: 6px;
`;

function BoardText<T extends BoardTextValue>({ value: initValue, name, placeholder, onChange, ...props }: Props<T>) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(initValue === undefined ? '' : initValue);

  useEffect(() => {
    setValue(initValue || '');
  }, [initValue]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const finalValue = value.replace(/^\s/g, '') as T;
      setValue(finalValue);
      onChange && onChange(finalValue);
    },
    [onChange]
  );

  const handleRequestFocus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <FormControl name={name} value={value} onRequestFocus={handleRequestFocus} {...props}>
      <Input ref={inputRef} type='text' placeholder={placeholder} value={value} onChange={handleChange} />
    </FormControl>
  );
}

BoardText.displayName = 'BoardText';
BoardText.defaultProps = BoardTextDefaultProps;

export default BoardText;
