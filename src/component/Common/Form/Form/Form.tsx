import React from 'react';
import { FormProps as Props, FormDefaultProps, FormCommands } from './Form.types';
import { useFormContext } from '../FormContext';
import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 260px;
`;

const Form = React.forwardRef<FormCommands, Props>(({ children, onSubmit }, ref) => {
  const { submit, focusControl } = useFormContext();

  const commands: FormCommands = useMemo(() => ({ focus: focusControl }), [focusControl]);

  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(commands);
      } else {
        ref.current = commands;
      }
    }
  }, [commands, ref]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const submitResult = submit();
      if (submitResult) {
        onSubmit && onSubmit(submitResult);
      }
    },
    [submit, onSubmit]
  );

  return <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>;
});

Form.displayName = 'Form';
Form.defaultProps = FormDefaultProps;

export default Form;
