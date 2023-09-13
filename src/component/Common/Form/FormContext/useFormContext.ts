import { useContext } from 'react';
import { FormContext } from './FormContext';

export default function useFormContext() {
  const value = useContext(FormContext);
  if (value == null) {
    throw new Error('useFormContext should be used within FormContext.Provider');
  }

  return value;
}

export { useFormContext };
