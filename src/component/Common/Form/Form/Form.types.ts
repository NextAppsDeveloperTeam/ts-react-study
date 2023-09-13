import { ReactNode } from 'react';

export interface FormCommands {
  focus(name: string): void;
}

export interface FormProps {
  children: ReactNode;
  onSubmit?(data: Dict): void;
}

export const FormDefaultProps = {};
