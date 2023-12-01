import React, { ChangeEvent } from 'react';
import { BoardTextAreaProps as Props, BoardTextAreaDefaultProps, BoardTextAreaValue } from './BoardTextArea.types';
import FormControl from '../FormControl';
import styled from 'styled-components';

const Input = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 10px 6px;
  resize: none;
`;

function BoardTextArea<T extends BoardTextAreaValue>({
  value: initValue,
  name,
  placeholder,
  onChange,
  onValidate,
  ...props
}: Props<T>) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [value, setValue] = useState(initValue === undefined ? '' : initValue);

  useEffect(() => {
    setValue(initValue === undefined ? '' : initValue);
  }, [initValue]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value as T;
      onChange && onChange(value);
      setValue(value === undefined ? '' : value);
    },
    [onChange]
  );

  const handleRequestFocus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleValidate = useCallback((value: T) => {
    const strReg = value.replace(/\s/g, '').length === 0;
    if (notEmpty(value) && strReg) {
      return '내용을 입력해주세요.';
    }

    if (onValidate) {
      return onValidate(value);
    }

    return true;
  }, [onValidate]);

  return (
    <FormControl name={name} value={value} onRequestFocus={handleRequestFocus} onValidate={handleValidate} {...props}>
      <Input ref={inputRef} placeholder={placeholder} value={value} onChange={handleChange} />
    </FormControl>
  );
}

BoardTextArea.displayName = 'BoardText';
BoardTextArea.defaultProps = BoardTextAreaDefaultProps;

export default BoardTextArea;
