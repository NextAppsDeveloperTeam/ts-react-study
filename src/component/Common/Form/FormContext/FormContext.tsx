import { createContext } from 'react';
import { FormContextValue } from '../FormContextProvider';

export const FormContext = createContext<FormContextValue | null>(null);
