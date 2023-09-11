import { FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';
import styled from 'styled-components';

interface InputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
  label?: string;
  type?: string;
  placeholder?: string;
  helperText?: string;
}

const Wrapper = styled.div<{ error?: boolean }>`
  display: flex;
  margin-bottom: 14px;
  flex-direction: column;
  
  input {
    border: ${(props) => (props.error ? `1px solid #d50000` : `1px solid black`)};
  }
  
  span {
    font-size: 14px;
    color: ${(props) => (props.error ? `#d50000` : `black`)};
  }
  
  .helperText {
    color: #0000d5;
    font-size: 14px;
    display: ${(props) => (props.error ? 'none' : 'block')};
  }
`;

const Input = styled.input`
  display: flex;
  height: 35px;
  width: 100%;
  outline: none;
  padding-left: 5px;
  margin: 3px 0;
`;

const Label = styled.label`
  font-size: 16px;

  span {
    color: #d50000;
  }
`;

function FormContext<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: InputProps<TFieldValues, TName>) {
  const name = props.name;
  const label = props.label;
  const helperText = props.helperText;
  const { field, fieldState } = useController({
    name,
    rules: props.rules,
  });

  return (
    <>
      <Label>{label} <span>*</span></Label>
      <Wrapper error={fieldState.error && true}>
        <Input {...field} type={props.type} placeholder={props.placeholder} />
        <span>{fieldState.error && fieldState.error.message}</span>
        <p className='helperText'>{helperText}</p>
      </Wrapper>
    </>
  );
}

export default FormContext;
