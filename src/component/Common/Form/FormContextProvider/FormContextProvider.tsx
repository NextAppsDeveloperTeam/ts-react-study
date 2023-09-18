import React from 'react';
import { FormContext } from '../FormContext';
import { FormContextProps as Props, FormControlCommands } from './FormContextProvider.types';

const FormContextProvider = ({ children }: Props) => {
  const [controls, setControls] = useState<Dict<FormControlCommands>>({});

  const submit = useCallback(() => {
    let isValid = true;

    const values: Dict = {};

    Object.keys(controls).forEach((key) => {
      const commands = controls[key];
      values[key] = commands.getValue();
      if (!commands.validate()) {
        isValid = false;
      }
    });

    return isValid ? values : false;
  }, [controls]);

  const focusControl = useCallback(
    (name: string) => {
      if (controls[name]) {
        controls[name].focus();
      }
    },
    [controls]
  );

  const addControl = useCallback((name: string, commands: FormControlCommands) => {
    setControls((old) => {
      const newValue = { ...old };
      newValue[name] = commands;
      return newValue;
    });
  }, []);

  return (
    <FormContext.Provider
      value={{
        submit,
        focusControl,
        addControl,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
